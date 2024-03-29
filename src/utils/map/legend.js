import colorGenerator from 'colors-generator';
import { Feature, Map, View } from 'ol';
import { LineString, Point, Polygon } from 'ol/geom';
import { GeometryType } from './constants';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import CircleStyle from 'ol/style/Circle';
import Fill from 'ol/style/Fill';
import Stroke from 'ol/style/Stroke';
import Style from 'ol/style/Style';
import { createRandomId, groupBy } from './helpers';
import colorsys from 'colorsys';
import orderBy from 'lodash.orderby';

const LEGEND_SIZE = 50;
const START_COLOR = '#86bff2';

export async function createGenericLegend(featuresLayer) {
   const [tempMap, tempMapElement] = createLegendTempMap();
   const vectorLayer = tempMap.getLayers().getArray()[0];
   const features = featuresLayer.getSource().getFeatures();
   const groupedFeatures = groupBy(features, feature => feature.get('_name'));
   const featureNames = Object.keys(groupedFeatures);
   const colors = generateColors(featureNames.length);
   const legend = [];

   for (let i = 0; i < featureNames.length; i++) {
      const featureName = featureNames[i];
      const featureGroup = groupedFeatures[featureName];
      const feature = featureGroup[0];
      const symbol = await createSymbol(featureName, feature, featureGroup.length, colors[i], vectorLayer);

      legend.push(symbol);
   }

   tempMap.dispose();
   tempMapElement.remove();

   const ordered = orderLegend(legend);

   return ordered;
}

export function createLegendTempMap() {
   const map = new Map({
      layers: [
         new VectorLayer({
            source: new VectorSource()
         })
      ],
      view: new View({
         extent: [0, 0, LEGEND_SIZE, LEGEND_SIZE]
      })
   });

   const mapElement = document.createElement('div');
   Object.assign(mapElement.style, { position: 'absolute', top: '-9999px', left: '-9999px', width: `${LEGEND_SIZE}px`, height: `${LEGEND_SIZE}px` });
   document.getElementsByTagName('body')[0].appendChild(mapElement);

   map.setTarget(mapElement);
   map.getView().fit([0, 0, LEGEND_SIZE, LEGEND_SIZE], map.getSize());

   return [map, mapElement];
}

async function createSymbol(name, feature, featureCount, color, vectorLayer) {
   const geometryType = feature.getGeometry().getType();
   const tempFeature = new Feature({ geometry: createGeometry(geometryType) });   
   const style = createStyle(geometryType, color);
   tempFeature.setStyle(style);

   const symbol = {
      id: createRandomId(),
      name,
      geometryType,
      featureCount,
      image: await createSymbolImage(vectorLayer, tempFeature),
      style,
      hidden: false
   };

   return symbol;
}

async function createSymbolImage(vectorLayer, feature) {
   return new Promise((resolve) => {
      vectorLayer.once('postrender', event => {
         resolve(event.context.canvas.toDataURL());
      });

      const source = vectorLayer.getSource();
      source.clear();
      source.addFeature(feature);
   });
}

function createGeometry(geometryType) {
   switch (geometryType) {
      case GeometryType.Polygon:
      case GeometryType.MultiPolygon:
         return new Polygon([[[0, 0], [0, LEGEND_SIZE], [LEGEND_SIZE, LEGEND_SIZE], [LEGEND_SIZE, 0], [0, 0]]]);
      case GeometryType.LineString:
      case GeometryType.MultiLineString:
         return new LineString([[0, LEGEND_SIZE], [LEGEND_SIZE, 0]]);
      case GeometryType.Point:
      case GeometryType.MultiPoint:
         return new Point([LEGEND_SIZE / 2, LEGEND_SIZE / 2]);
      default:
         return new Polygon([[[0, 0], [0, LEGEND_SIZE], [LEGEND_SIZE, LEGEND_SIZE], [LEGEND_SIZE, 0], [0, 0]]]);
   }
}

function createStyle(geometryType, color) {
   switch (geometryType) {
      case GeometryType.Polygon:
      case GeometryType.MultiPolygon:
         return [
            new Style({ fill: new Fill({ color }) })
         ];
      case GeometryType.LineString:
      case GeometryType.MultiLineString:
         return [
            new Style({ stroke: new Stroke({ color, width: 2 }) })
         ];
      case GeometryType.Point:
      case GeometryType.MultiPoint:
         return [
            new Style({
               image: new CircleStyle({
                  radius: 4,
                  fill: new Fill({
                     color
                  }),
                  stroke: new Stroke({
                     color: '#000000',
                     width: 1
                  })
               })
            })
         ];
      default:
         return [
            new Style({ fill: new Fill({ color }) })
         ];
   }
}

function orderLegend(legend) {
   const grouped = groupBy(legend, symbol => symbol.geometryType);
   
   const points = (grouped[GeometryType.Point] || [])
      .concat(grouped[GeometryType.MultiPoint] || []);
   
   const lines = (grouped[GeometryType.LineString] || [])
      .concat(grouped[GeometryType.MultiLineString] || []); 

   const surfaces = (grouped[GeometryType.Polygon] || [])
      .concat(grouped[GeometryType.MultiPolygon] || []);

   const ordered = orderBy(points, symbol => symbol.name)
      .concat(orderBy(lines, symbol => symbol.name))
      .concat(orderBy(surfaces, symbol => symbol.name));

   for (let i = 0; i < ordered.length; i++) {
      ordered[i].style[0].setZIndex(ordered.length - i);
   }

   return ordered;
}

function generateColors(num) {
   const colors = colorGenerator.generate(START_COLOR, num).purer(0.1).get();

   return colors.map(color => {
      const { r, g, b } = colorsys.hexToRgb(color);

      return `rgba(${r}, ${g}, ${b})`;
   });
}