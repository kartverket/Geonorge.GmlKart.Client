import { extend, getCenter } from 'ol/extent';
import { filesize } from 'filesize';
import { getArea, getLength } from 'ol/sphere';
import WKT from 'ol/format/WKT';
import Url from 'url-parse';

const MAX_ZOOM = process.env.REACT_APP_MAX_ZOOM;
const PROXY_HOSTS = process.env.REACT_APP_PROXY_HOSTS.split(',');
const PROXY_URL = process.env.REACT_APP_PROXY_URL;
const GML_REGEX = /<\?xml.*?<\w+:FeatureCollection.*?xmlns:\w+="http:\/\/www\.opengis\.net\/gml\/3\.2"/s;

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
      .filter(feature => feature.get('_name') === name);
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

export function zoomToGeometry(map, wkt) {
   const geometry = new WKT().readGeometry(wkt);
   const extent = geometry.getExtent()

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
   const fileContents = await file.slice(0, 100000).text();

   return GML_REGEX.test(fileContents);
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

export function generateProxyUrl(urlString) {
   const url = new Url(urlString);

   if (PROXY_HOSTS.includes(url.host)) {
      const proxyUrl = new Url(PROXY_URL);
      proxyUrl.set('query', `url=${urlString}`);

      return proxyUrl.toString();
   }
   
   return urlString;
}

export const getFileSize = size => filesize(size, { separator: ',', spacer: ' ', standard: 'jedec' });

export const allEqual = array => array.every(value => value === array[0]);

export const createRandomId = () => '_' + Math.random().toString(36).substring(2, 11);
