import { baseMap } from 'config/baseMap.config';
import { View } from 'ol';
import { defaults as defaultControls, FullScreen } from 'ol/control';
import GeoJSON from 'ol/format/GeoJSON';
import { defaults as defaultInteractions, DragRotateAndZoom } from 'ol/interaction';
import { Vector as VectorLayer } from 'ol/layer';
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import TileWMS from 'ol/source/TileWMS';
import VectorSource from 'ol/source/Vector';
import { addValidationResultToFeatures } from './features';

function createFeaturesLayer(mapDocument) {
   const features = new GeoJSON().readFeatures(mapDocument.geoJson);

   const featuresLayer = new VectorLayer({
      source: new VectorSource({ features }),
      declutter: true
   });

   featuresLayer.set('id', 'features');

   addValidationResultToFeatures(mapDocument, features);

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

function createTileLayer() {
   return new TileLayer({
      source: new TileWMS({
         url: baseMap.url,
         params: {
            LAYERS: baseMap.layer,
            VERSION: '1.1.1',
         }
      }),
      maxZoom: baseMap.maxZoom
   });
}

export function createMap(mapDocument) {
   if (!mapDocument) {
      return null;
   }

   return new Map({
      layers: [
         createTileLayer(),
         createFeaturesLayer(mapDocument),
         createSelectedFeaturesLayer()
      ],
      view: new View({
         projection: mapDocument.epsg.code,
         padding: [25, 25, 25, 25]
      }),
      controls: defaultControls().extend([new FullScreen()]),
      interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
   });
}
