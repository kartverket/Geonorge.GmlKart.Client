import { extend, getCenter } from 'ol/extent';
import detect from 'detect-file-type';
import filesize from 'filesize';
import { getArea, getLength } from 'ol/sphere';

const MAX_ZOOM = process.env.REACT_APP_MAX_ZOOM;
const VALID_MIME = process.env.REACT_APP_VALID_MIME;

export function getLayer(map, id) {
   return map.getLayers().getArray()
      .find(layer => layer.get('id') === id);
}

export function getFeatureById(vectorLayer, id) {
   return vectorLayer.getSource().getFeatures()
      .find(feature => feature.get('id') === id);
}

export function getFeaturesByName(vectorLayer, name) {
   return vectorLayer.getSource().getFeatures()
      .filter(feature => feature.get('name') === name);
}

export function getSymbolById(legend, id) {
   return legend.find(symbol => symbol.id === id);
}

export function zoomTo(map, features) {
   const featureExtent = features[0].getGeometry().getExtent();

   for (let i = 0; i < features.length; i++) {
      extend(featureExtent, features[i].getGeometry().getExtent());
   }

   zoom(map, featureExtent);
}

export function zoomToPoint(map, feature) {
   const layer = getLayer(map, 'selected-features');
   const selectedFeature = getFeatureById(layer, feature.get('id'));
   const zoomTo = selectedFeature.get('zoomTo');
   const extent = zoomTo.getExtent();

   zoom(map, extent);
}

function zoom(map, extent) {
   const view = map.getView();
   const resolution = view.getResolutionForExtent(extent);
   const zoom = view.getZoomForResolution(resolution);

   view.animate({
      center: getCenter(extent),
      duration: 1000
   });

   view.animate({
      zoom: zoom <= MAX_ZOOM ? zoom : MAX_ZOOM,
      duration: 1000
   });
}

export const groupBy = (arr, criteria) => {
   return arr.reduce((obj, item) => {
      const key = typeof criteria === 'function' ? criteria(item) : item[criteria];

      if (!obj.hasOwnProperty(key)) {
         obj[key] = [];
      }

      obj[key].push(item);

      return obj;
   }, {});
};

export function debounce(func, wait, immediate) {
   let timeout;

   return function executedFunction() {
      const context = this;
      const args = arguments;

      const later = function () {
         timeout = null;

         if (!immediate) {
            func.apply(context, args);
         }
      };

      const callNow = immediate && !timeout;

      clearTimeout(timeout);

      timeout = setTimeout(later, wait);

      if (callNow) {
         func.apply(context, args);
      }
   };
};

export async function isValidFileType(file) {
   return new Promise((resolve) => {
      file.slice(0, 50).arrayBuffer()
         .then(buffer => {
            detect.fromBuffer(buffer, (error, result) => {
               if (error !== null || result.mime !== VALID_MIME) {
                  resolve(false);
               }

               resolve(true);
            });
         });
   })
}

export function getAreaFormatted(polygon) {
   const area = getArea(polygon);

   if (area > 10000) {
      return `${Math.round((area / 1000000) * 100) / 100} km²`.replace('.', ',');
   }

   return `${Math.round(area * 100) / 100} m²`.replace('.', ',');
}

export function getLengthFormatted(line) {
   const length = getLength(line);

   if (length > 100) {
      return `${Math.round((length / 1000) * 100) / 100} km`.replace('.', ',');
   }

   return `${Math.round(length * 100) / 100} m`.replace('.', ',');
}

export const getFileSize = size => filesize(size, { separator: ',', spacer: ' ' });

export const allEqual = array => array.every(value => value === array[0]);

export const createId = () => '_' + Math.random().toString(36).substring(2, 11);
