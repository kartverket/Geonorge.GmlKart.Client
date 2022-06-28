import { Feature } from 'ol';
import { LineString, Point, Polygon } from 'ol/geom';
import { loadSldStyle } from 'utils/map/sld';
import { getGeometryStyles, OlStyler } from 'utils/sld-reader';
import { processExternalGraphicSymbolizersAsync } from 'utils/sld-reader/imageCache';
import { createRandomId } from './helpers';
import { createLegendTempMap } from './legend';
import { get, set } from 'idb-keyval';

const BUILD_NUMBER = process.env.REACT_APP_BUILD_NUMBER;
const IDB_KEY = 'geonorge-gml-kart';
const SYMBOLIZER = { POLYGON: 'POLYGON', LINE: 'LINE', POINT: 'POINT', TEXT: 'TEXT' };
const LEGEND_SIZE = 64;

export async function createSldLegend(styling) {
   const legendsFromIdb = await loadLegendFromIndexedDb(styling.namespace);

   if (legendsFromIdb) {
      return legendsFromIdb;
   }

   const legends = [];
   const [map, mapElement] = createLegendTempMap(LEGEND_SIZE);
   const vectorLayer = map.getLayers().getArray()[0];

   const layers = styling.layers
      .filter(layer => layer.showLegend === true);

   for (let i = 0; i < layers.length; i++) {
      const legend = await createLegend(layers[i], vectorLayer);

      if (legend !== null) {
         legends.push(legend);
      }
   }

   map.dispose();
   mapElement.remove();

   await saveLegendToIndexedDb(styling.namespace, legends);

   return legends;
}

export function filterLegend(legend, features) {
   return legend.map(leg => {
      leg.symbols.forEach(symbol => {
         symbol.hidden = !features.some(feature => feature.get('_symbolId') === symbol.id);
      });

      leg.hidden = leg.symbols.every(symbol => symbol.hidden);

      return leg;
   });
}

async function createLegend(layer, vectorLayer) {
   const style = await loadSldStyle(layer);

   if (style === null) {
      return null;
   }

   const rules = style.featuretypestyles[0].rules;

   const legend = {
      name: style.name,
      symbols: [],
      hidden: false
   };

   await loadExternalGraphics(style);

   for (let i = 0; i < rules.length; i++) {
      const rule = rules[i];
      const feature = new Feature({ geometry: createGeometry(rule) });
      const styles = getGeometryStyles([rule]);
      const olStyles = getOlStyles(styles, feature, rule);

      feature.setStyle(olStyles);

      legend.symbols.push({
         id: createRandomId(),
         image: await createSymbolImage(vectorLayer, feature),
         rule,
         hidden: false
      });
   }

   return legend;
}

async function createSymbolImage(vectorLayer, feature) {
   return new Promise((resolve) => {
      vectorLayer.once('postrender', event => {
         resolve(event.context.canvas.toDataURL());
      });
      
      const source = vectorLayer.getSource();
      source.clear();
      source.addFeature(feature);
   });
}

async function loadExternalGraphics(style) {
   const featureStyleType = style.featuretypestyles[0];
   const rules = featureStyleType.rules;

   await processExternalGraphicSymbolizersAsync(rules, featureStyleType, {})
}

function getOlStyles(styles, feature, rule) {
   const olStyles = OlStyler(styles, feature);

   if (getSymbolizerType(rule) === SYMBOLIZER.POINT) {
      return olStyles.map(olStyle => {
         const clone = olStyle.clone();
         const image = clone.getImage();

         if (image) {
            image.setScale(image.getScale() * 1.75);
         }

         return clone;
      })
   }

   return olStyles;
}

function createGeometry(rule) {
   const symbolizer = getSymbolizerType(rule);

   switch (symbolizer) {
      case SYMBOLIZER.POLYGON:
         return new Polygon([[[0, 0], [0, 64], [64, 64], [64, 0], [0, 0]]]);
      case SYMBOLIZER.LINE:
         return new LineString([[8, 56], [56, 8]]);
      case SYMBOLIZER.POINT:
      case SYMBOLIZER.TEXT:
         return new Point([32, 32]);
      default:         
         return new Polygon([[[0, 0], [0, 64], [64, 64], [64, 0], [0, 0]]]);
   }
}

function getSymbolizerType(rule) {
   if (rule.polygonsymbolizer) {
      return SYMBOLIZER.POLYGON;
   }
   if (rule.linesymbolizer) {
      return SYMBOLIZER.LINE;
   }
   if (rule.pointsymbolizer) {
      return SYMBOLIZER.POINT;
   }
   if (rule.textsymbolizer) {
      return SYMBOLIZER.TEXT;
   }
}

async function saveLegendToIndexedDb(namespace, legends) {
   const data = await get(IDB_KEY) || {};
   const updatedData = { version: BUILD_NUMBER, legends: [...data.legends || [], { namespace, legends }] };
   await set(IDB_KEY, updatedData);
}

async function loadLegendFromIndexedDb(namespace) {
   const { version, legends } = await get(IDB_KEY) || {};

   if (legends && version !== BUILD_NUMBER) {
      await set(IDB_KEY, null);    
   }

   return legends?.find(legend => legend.namespace === namespace)?.legends;
}