import { baseMap } from 'config/baseMap.config';
import { View } from 'ol';
import { defaults as defaultControls, FullScreen } from 'ol/control';
import GeoJSON from 'ol/format/GeoJSON';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';
import { Vector as VectorLayer } from 'ol/layer';
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import TileWMS from 'ol/source/TileWMS';
import WMTS, { optionsFromCapabilities } from 'ol/source/WMTS';
import WMTSCapabilities from 'ol/format/WMTSCapabilities';
import VectorSource from 'ol/source/Vector';
import { addValidationResultToFeatures } from './features';
import axios from 'axios';
import { addSldStyling } from './styling';
import { baseMapEpsgCodes } from 'config/epsg.config';

let wmtsOptions = null;

async function createFeaturesLayer(mapDocument) {
   const features = new GeoJSON().readFeatures(mapDocument.geoJson);

   const featuresLayer = new VectorLayer({
      source: new VectorSource({ features }),
      declutter: true
   });

   featuresLayer.set('id', 'features');

   addValidationResultToFeatures(mapDocument, features);

   if (mapDocument.styling) {
      await addSldStyling(features, mapDocument.styling, () => { featuresLayer.changed() });
   }

   return featuresLayer;
}

function createSelectedFeaturesLayer() {
   const selectedFeaturesLayer = new VectorLayer({
      source: new VectorSource(),
      zIndex: 999,
      declutter: true
   });

   selectedFeaturesLayer.set('id', 'selected-features');

   return selectedFeaturesLayer;
}

async function createTileLayer(epsgCode) {
   /*let tileLayer = await createTileLayerWMTS(epsgCode);

   if (tileLayer === null) {
      tileLayer = createTileLayerWMS();
   }*/

   const tileLayer = createTileLayerWMS();
   tileLayer.set('id', 'baseMap');

   return tileLayer;
}

function createTileLayerWMS() {
   return new TileLayer({
      source: new TileWMS({
         url: baseMap.wmsUrl,
         params: {
            LAYERS: baseMap.layer,
            VERSION: '1.1.1',
         }
      }),
      maxZoom: baseMap.maxZoom
   });
}

async function getWMTSOptions(epsgCode) {
   if (wmtsOptions !== null) {
      return wmtsOptions;
   }

   let response;

   try {
      response = await axios.get(baseMap.wmtsCapabilitiesUrl);
   } catch {
      return null;
   }

   const capabilities = new WMTSCapabilities().read(response.data);

   wmtsOptions = optionsFromCapabilities(capabilities, {
      layer: baseMap.layer,
      matrixSet: epsgCode,
   });

   return wmtsOptions;
}

// eslint-disable-next-line
async function createTileLayerWMTS(epsgCode) {
   const options = await getWMTSOptions(epsgCode);

   if (options === null) {
      return null;
   }

   return new TileLayer({
      source: new WMTS(options),
      maxZoom: baseMap.maxZoom
   });
}

export async function createMap(mapDocument) {
   if (!mapDocument) {
      return null;
   }

   const map = new Map({
      controls: defaultControls().extend([new FullScreen()]),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
   });

   const epsgCode = mapDocument.epsg.epsgCode2d;
   
   if (baseMapEpsgCodes.includes(epsgCode)) {
      map.addLayer(await createTileLayer(epsgCode));
   }

   map.addLayer(await createFeaturesLayer(mapDocument));
   map.addLayer(createSelectedFeaturesLayer());

   map.setView(new View({
      padding: [25, 25, 25, 25],
      projection: epsgCode
   }));

   return map;
}