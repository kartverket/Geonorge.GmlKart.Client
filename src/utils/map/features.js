import { GeometryCollection } from 'ol/geom';
import { Stroke, Style, Fill, Circle } from 'ol/style';
import { GeometryType } from './constants';
import { getAreaFormatted, getFeaturesByName, getLayer, getLengthFormatted, groupBy } from './helpers';
import WKT from 'ol/format/WKT';
import { filterSelector } from 'utils/sld-reader/Filter';

const HIGHLIGHT_COLOR = 'rgb(0 109 173 / 50%)';
const ERROR_COLOR = 'rgb(255 0 0 / 50%)';

export function toggleFeatures(legend, map) {
   const vectorLayer = getLayer(map, 'features');
   const features = getFeaturesByName(vectorLayer, legend.name);

   features.forEach(feature => {
      toggleFeature(feature);
   });
}

export function toggleFeature(feature) {
   const visible = !feature.get('_visible');

   if (visible) {
      const savedStyle = feature.get('_savedStyle');
      feature.setStyle(savedStyle);
   } else {
      feature.set('_savedStyle', feature.getStyle());
      feature.setStyle(new Style(null));
   }

   feature.set('_visible', visible);
}

export function addGeometryInfo(features) {
   features.forEach(feature => {
      const geometry = feature.getGeometry();
      const geometryType = geometry.getType();

      switch (geometryType) {
         case GeometryType.Polygon:
         case GeometryType.MultiPolygon:
            if (!feature.get('_area')) {
               feature.set('_area', getAreaFormatted(geometry));
            }
            break;
         case GeometryType.LineString:
         case GeometryType.MultiLineString:
            if (!feature.get('_length')) {
               feature.set('_length', getLengthFormatted(geometry));
            }
            break;
         default:
            break;
      }
   });
}

export function highlightSelectedFeatures(map, features) {
   const featureLayer = getLayer(map, 'selected-features');
   const layerSource = featureLayer.getSource();

   layerSource.clear();

   const selectedFeatures = features.map(feature => {
      const cloned = feature.clone();
      const errorMessages = feature.get('_errorMessages');

      if (errorMessages) {
         const wkts = errorMessages
            .filter(message => message.zoomTo)
            .map(message => message.zoomTo);

         if (wkts.length) {
            const format = new WKT();
            const geometries = wkts.map(wkt => format.readGeometry(wkt));
            const geoCollection = new GeometryCollection();

            geoCollection.setGeometries(geometries);
            cloned.set('_zoomTo', geoCollection);
         }
      }

      const styles = getHighlightStyle(cloned);
      cloned.setStyle(styles);

      return cloned;
   });

   layerSource.addFeatures(selectedFeatures);
}

export function addGenericLegendToFeatures(features, legend) {
   const groupedFeatures = groupBy(features, feature => feature.get('_name'));
   const featureNames = Object.keys(groupedFeatures);

   for (let i = 0; i < featureNames.length; i++) {
      const featureName = featureNames[i];
      const symbol = legend.find(symb => symb.name === featureName);

      if (!symbol) {
         continue;
      }

      const feats = groupedFeatures[featureName];

      for (let j = 0; j < feats.length; j++) {
         const feature = feats[j];
         feature.set('_symbolId', symbol.id);
      }
   }
}

export function addSldLegendToFeatures(features, legends) {
   const groupedFeatures = groupBy(features, feature => feature.get('_name'));
   const featureNames = Object.keys(groupedFeatures);

   for (let i = 0; i < featureNames.length; i++) {
      const featureName = featureNames[i];
      const symbols = legends.find(legend => legend.name === featureName)?.symbols || [];

      if (!symbols.length) {
         continue;
      }

      const feats = groupedFeatures[featureName];

      for (let j = 0; j < feats.length; j++) {
         const feature = feats[j];
         const symbol = symbols.find(sym => !sym.rule.filter || filterSelector(sym.rule.filter, feature));

         if (symbol) {
            feature.set('_symbolId', symbol.id);
         }
      }
   }
}

export function addValidationResultToFeatures(mapDocument, features) {
   const rules = mapDocument?.validationResult.rules || [];

   if (!rules.length) {
      return;
   }

   const messages = rules.flatMap(rule => rule.messages);

   for (let i = 0; i < messages.length; i++) {
      const message = messages[i];

      if (!message.gmlIds?.length) {
         continue;
      }

      for (let j = 0; j < message.gmlIds.length; j++) {
         const gmlId = message.gmlIds[j];
         const feature = features.find(feat => feat.get('id') === gmlId);

         if (feature) {
            const errorMessages = feature.get('_errorMessages');

            if (!errorMessages) {
               feature.set('_errorMessages', [{ message: message.message, zoomTo: message.zoomTo }]);
            } else {
               errorMessages.push({ message: message.message, zoomTo: message.zoomTo });
            }
         }
      }
   }
}

function getHighlightStyle(feature) {
   if (feature.get('_name') === 'RpJuridiskPunkt') {
      return [];
   }

   const stroke = new Stroke({
      color: feature.get('_errorMessages')?.length ? ERROR_COLOR : HIGHLIGHT_COLOR,
      lineCap: 'butt',
      width: 3
   });

   const origStyleFunction = feature.getStyleFunction();
   let highlightStyle;

   return (feature, resolution) => {
      if (feature.get('_name') === 'RpPåskrift') {
         const styles = origStyleFunction(feature, resolution);

         highlightStyle = styles[0].clone();
         highlightStyle.getText().setStroke(stroke);
      } else if (feature.getGeometry().getType() === GeometryType.Point) {
         const image = feature.getStyle()[0].getImage();

         highlightStyle = new Style({
            image: new Circle({
               radius: image.getRadius(),
               fill: image.getFill(),
               stroke
            })
         });
      } else {
         highlightStyle = new Style({
            stroke
         });
      }

      const zoomToStyles = [];
      const zoomTo = feature.get('_zoomTo');

      if (zoomTo) {
         const geometries = zoomTo.getGeometries();
         addZoomToStyle(geometries, zoomToStyles);
      }

      return [highlightStyle].concat(zoomToStyles);
   };
}

function addZoomToStyle(geometries, styles) {
   for (let i = 0; i < geometries.length; i++) {
      const geometry = geometries[i];
      const geometryType = geometry.getType();

      switch (geometryType) {
         case GeometryType.GeometryCollection:
            addZoomToStyle(geometry.getGeometries(), styles);
            break;
         case GeometryType.Polygon:
         case GeometryType.MultiPolygon:
         case GeometryType.LineString:
         case GeometryType.MultiLineString:
            styles.push(
               new Style({
                  geometry,
                  stroke: new Stroke({
                     color: ERROR_COLOR,
                     lineCap: 'round',
                     width: 10,
                  })
               })
            );
            break;
         case GeometryType.Point:
         case GeometryType.MultiPoint:
            styles.push(
               new Style({
                  geometry,
                  image: new Circle({
                     radius: 5,
                     fill: new Fill({ color: ERROR_COLOR })
                  })
               })
            );
            break;
         default:
            break;
      }
   }
}