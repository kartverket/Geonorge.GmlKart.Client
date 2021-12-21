import { groupBy } from './helpers';

export function addStyling(features, legend) {
   const groupedFeatures = groupBy(features, feature => feature.get('name'));
   const featureNames = Object.keys(groupedFeatures);

   for (let i = 0; i < featureNames.length; i++) {
      const featureName = featureNames[i];
      const styles = legend.find(leg => leg.name === featureName)?.style || [];

      groupedFeatures[featureName].forEach(feature => {
         feature.setStyle(cloneStyles(styles));
         feature.set('visible', true);
      });
   }
}

function cloneStyles(styles) {
   return styles.map(style => style.clone());
}