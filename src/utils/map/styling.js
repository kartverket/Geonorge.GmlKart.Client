import { getFeaturesByName, getLayer, groupBy } from './helpers';

export function addStyling(features, legend) {
   const groupedFeatures = groupBy(features, feature => feature.get('_name'));
   const featureNames = Object.keys(groupedFeatures);

   for (let i = 0; i < featureNames.length; i++) {
      const featureName = featureNames[i];
      const styles = legend.find(leg => leg.name === featureName)?.style || [];

      groupedFeatures[featureName].forEach(feature => {
         feature.setStyle(cloneStyles(styles));
         feature.set('_visible', true);
      });
   }
}

export function updateFeatureZIndex(map, legend) {
   const vectorLayer = getLayer(map, 'features');

   for (let i = 0; i < legend.length; i++) {
      const symbol = legend[i];
      const features = getFeaturesByName(vectorLayer, symbol.name);

      features.forEach(feature => {
         const zIndex = legend.length - i;
         feature.getStyle()[0].setZIndex(zIndex);

         const savedStyle = feature.get('_savedStyle');

         if (savedStyle) {
            savedStyle[0].setZIndex(zIndex);
         }
      });
   }

   vectorLayer.changed();
}

function cloneStyles(styles) {
   return styles.map(style => style.clone());
}