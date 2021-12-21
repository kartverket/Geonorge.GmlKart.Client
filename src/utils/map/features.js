import { Stroke, Style } from 'ol/style';
import { getFeaturesByName, getLayer, groupBy } from './helpers';

export function toggleFeatures(legend, map) {
   const vectorLayer = getLayer(map, 'features');
   const features = getFeaturesByName(vectorLayer, legend.name);

   features.forEach(feature => {
      toggleFeature(feature);
   });
}

export function toggleFeature(feature) {
   const visible = !feature.get('visible');

   if (visible) {
      const savedStyle = feature.get('savedStyle');
      feature.setStyle(savedStyle);
   } else {
      feature.set('savedStyle', feature.getStyle());
      feature.setStyle(new Style(null));
   }

   feature.set('visible', visible);
}

export function highlightSelectedFeatures(map, features) {
   const featureLayer = getLayer(map, 'selected-features');
   const layerSource = featureLayer.getSource();

   layerSource.clear();

   const selectedFeatures = features.map(feature => {
      const cloned = feature.clone();
      const styles = getHighlightStyle(cloned);

      cloned.setStyle(styles);

      return cloned;
   });
         
   layerSource.addFeatures(selectedFeatures);
}

export function addLegendToFeatures(features, legend) {
   const groupedFeatures = groupBy(features, feature => feature.get('name'));
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
         feature.set('symbolId', symbol.id);
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
            const errorMessages = feature.get('errorMessages');

            if (!errorMessages) {
               feature.set('errorMessages', [message.message]);
            } else {
               errorMessages.push(message.message);
            }
         }
      }      
   }
}

function getHighlightStyle(feature) {
   return new Style({
      stroke: new Stroke({ 
         color: feature.get('errorMessages')?.length ? 'rgb(255 0 0 / 50%)' : 'rgb(0 109 173 / 50%)',
         lineCap: 'butt', 
         width: 5 
      })
   });
}
