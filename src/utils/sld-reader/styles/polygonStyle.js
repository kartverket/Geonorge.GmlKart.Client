import { toContext } from 'ol/render';
import { Style, Fill } from 'ol/style';
import { Polygon, MultiPolygon } from 'ol/geom';
import { DEVICE_PIXEL_RATIO } from 'ol/has';
import { IMAGE_LOADING, IMAGE_LOADED, IMAGE_ERROR } from '../constants';
import { memoizeStyleFunction } from './styleUtils';
import { getCachedImage, getImageLoadingState } from '../imageCache';
import { imageLoadingPolygonStyle, imageErrorPolygonStyle } from './static';
import { getSimpleStroke, getSimpleFill } from './simpleStyles';
import { getGraphicStrokeRenderer } from './graphicStrokeStyle';

function createPattern(graphic) {
   const { image, width, height } = getCachedImage(graphic.externalgraphic.onlineresource);

   const canvas = document.createElement('canvas');
   const context = canvas.getContext('2d');

   canvas.width = width;
   canvas.height = height;

   context.drawImage(
      image,
      0, 0, width, height,
      0, 0, width, height
   );

   return createAndRotatePattern(context, canvas, graphic, width, height);
}

function createAndRotatePattern(context, canvas, graphic, width, height) {
   const pattern = context.createPattern(canvas, 'repeat');
   let matrix = new DOMMatrix();

   if (graphic.rotation) {
      matrix = matrix.rotate(graphic.rotation);
   }

   if (graphic.size) {
      matrix = matrix.scale(graphic.size / width * DEVICE_PIXEL_RATIO, graphic.size / height * DEVICE_PIXEL_RATIO);
   }

   if (graphic.rotation || graphic.size) {
      pattern.setTransform(matrix);
   }

   return pattern;
}

function getExternalGraphicFill(symbolizer) {
   const { graphic } = symbolizer.fill.graphicfill;
   const fillImageUrl = graphic.externalgraphic.onlineresource;

   switch (getImageLoadingState(fillImageUrl)) {
      case IMAGE_LOADED:
         return new Fill({
            color: createPattern(symbolizer.fill.graphicfill.graphic)
         });
      case IMAGE_LOADING:
         return imageLoadingPolygonStyle.getFill();
      case IMAGE_ERROR:
         return imageErrorPolygonStyle.getFill();
      default:
         return imageLoadingPolygonStyle.getFill();
   }
}

function polygonStyle(symbolizer) {
   const fillImageUrl =
      symbolizer.fill &&
      symbolizer.fill.graphicfill &&
      symbolizer.fill.graphicfill.graphic &&
      symbolizer.fill.graphicfill.graphic.externalgraphic &&
      symbolizer.fill.graphicfill.graphic.externalgraphic.onlineresource;

   const polygonFill = fillImageUrl
      ? getExternalGraphicFill(symbolizer)
      : getSimpleFill(symbolizer.fill);

   if (symbolizer.stroke && symbolizer.stroke.graphicstroke) {
      const renderGraphicStroke = getGraphicStrokeRenderer(symbolizer);

      return new Style({
         renderer: (pixelCoords, renderState) => {
            // First render the fill (if any).
            if (polygonFill) {
               const { feature, context } = renderState;
               const render = toContext(context);
               render.setFillStrokeStyle(polygonFill, undefined);
               const geometryType = feature.getGeometry().getType();
               if (geometryType === 'Polygon') {
                  render.drawPolygon(new Polygon(pixelCoords));
               } else if (geometryType === 'MultiPolygon') {
                  render.drawMultiPolygon(new MultiPolygon(pixelCoords));
               }
            }

            // Then, render the graphic stroke.
            renderGraphicStroke(pixelCoords, renderState);
         },
      });
   }

   const polygonStroke = getSimpleStroke(symbolizer.stroke);

   return new Style({
      fill: polygonFill,
      stroke: polygonStroke,
   });
}

const cachedPolygonStyle = memoizeStyleFunction(polygonStyle);

/**
 * @private
 * Get an OL line style instance for a feature according to a symbolizer.
 * @param {object} symbolizer SLD symbolizer object.
 * @returns {ol/Style} OpenLayers style instance.
 */
function getPolygonStyle(symbolizer) {
   return cachedPolygonStyle(symbolizer);
}

export default getPolygonStyle;
