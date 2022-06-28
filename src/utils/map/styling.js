import { createOlStyleFunction } from 'utils/sld-reader';
import { getFeaturesByName, getLayer, groupBy } from './helpers';
import { loadSldStyle } from './sld';

export function addGenericStyling(features, legend) {
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

export async function addSldStyling(features, styling, callback) {
   const groupedFeatures = groupBy(features, feature => feature.get('_name'));
   const featureKeys = Object.keys(groupedFeatures);

   for (let i = 0; i < featureKeys.length; i++) {
      const key = featureKeys[i];
      const featureMember = styling.layers.find(layer => layer.name === key);

      if (!featureMember)  {
         continue;
      }

      const style = await createStyle(featureMember, callback, featureMember.zIndex);

      if (style === null) {
         continue;
      }

      groupedFeatures[key].forEach(feature => {
         feature.setStyle(style);
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

export async function createStyle(layer, callback) {
   const style = await loadSldStyle(layer);

   if (style === null) {
      return null;
   }

   const featureTypeStyle = style.featuretypestyles[0];

   return createOlStyleFunction(featureTypeStyle, {
      imageLoadedCallback: callback,
      zIndex: layer.zIndex
   });
}

export function createStyleFunction(feature, stroke) {
   const origStyleFunction = feature.getStyleFunction();

   if (!origStyleFunction) {
      return null;
   }

   return (feature, resolution) => {
      const styles = origStyleFunction(feature, resolution);
      let newStyle;

      if (feature.get('_name') === 'RpPåskrift') {
         newStyle = styles[1].clone();
         newStyle.getText().setStroke(stroke);
      } else {
         newStyle = styles[0].clone();
         newStyle.setStroke(stroke);
      }

      newStyle.setFill(null);

      return [newStyle];
   };
}

function cloneStyles(styles) {
   return styles.map(style => style.clone());
}