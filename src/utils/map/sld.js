import axios from 'axios';
import { getLayer as getSldLayer, getStyle, Reader } from 'utils/sld-reader';
import { generateProxyUrl } from './helpers';

const sldStyles = {};

export async function loadSldStyle(layer) {
   if (!layer.sld) {
      return null;
   }

   const name = layer.name;

   if (sldStyles[name]) {
      return sldStyles[name];
   }

   const url = generateProxyUrl(layer.sld);

   try {
      const response = await axios.get(url);
      const sldObject = Reader(response.data, name);
      addProxyUrlToOnlineResources(sldObject);          
      const sldLayer = getSldLayer(sldObject);
      const style = getStyle(sldLayer, name);
      sldStyles[name] = style;

      return style;
   } catch {
      return null;
   }
}

function addProxyUrlToOnlineResources(target) {
   for (const key in target) {
      if (key !== 'e' && typeof target[key] === 'object') {
         addProxyUrlToOnlineResources(target[key]);
      } else if (key === 'onlineresource') {
         target[key] = generateProxyUrl(target[key]);
      }
   }
}