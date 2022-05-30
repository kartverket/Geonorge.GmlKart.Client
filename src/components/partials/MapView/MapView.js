import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { FeatureContextMenu, FeatureInfo, Legend, MapInfo, ValidationErrors } from 'components/partials';
import { ZoomToExtent } from 'ol/control';
import { click } from 'ol/events/condition';
import { Select } from 'ol/interaction';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFeatureInfo } from 'store/slices/mapSlice';
import { addGeometryInfo, addLegendToFeatures, highlightSelectedFeatures, toggleFeatures } from 'utils/map/features';
import { debounce, getLayer } from 'utils/map/helpers';
import { createLegend } from 'utils/map/legend';
import { createMap } from 'utils/map/map';
import { addStyling, updateFeatureZIndex } from 'utils/map/styling';
import './MapView.scss';

function MapView({ mapDocument }) {
   const [map, setMap] = useState(null);
   const [contextMenuData, setContextMenuData] = useState(null);
   const [features, setFeatures] = useState([]);
   const [selectedFeatures, setSelectedFeatures] = useState([]);
   const [legend, setLegend] = useState([]);
   const symbol = useSelector(state => state.map.symbol);
   const sidebar = useSelector(state => state.map.sidebar);
   const sidebarVisible = useRef(true);
   const dispatch = useDispatch();
   const mapElement = useRef();

   const selectFeature = useCallback(
      features => {
         addGeometryInfo(features);
         highlightSelectedFeatures(map, features);
         setSelectedFeatures([...features]);
         dispatch(toggleFeatureInfo({ expanded: true }));
      },
      [map, dispatch]
   );

   const addMapInteraction = useCallback(
      () => {
         const selectClick = new Select({
            condition: click,
            layers: layer => layer.get('id') === 'features',
            multi: true,
            hitTolerance: 5,
            style: null
         });

         map.addInteraction(selectClick);

         selectClick.on('select', event => {
            const features = event.target.getFeatures();

            if (features.getLength() === 1) {
               selectFeature(features.getArray());
            } else if (features.getLength() > 1) {
               const originalEvent = event.mapBrowserEvent.originalEvent;
               setContextMenuData({ left: originalEvent.offsetX, top: originalEvent.offsetY, features });
            }
         });
      },
      [map, selectFeature]
   );

   const { onWindowResize } = useMemo(
      () => {
         const onWindowResize = debounce(_ => {
            map.updateSize();
         }, 500);

         return { onWindowResize };
      },
      [map]
   );

   useEffect(
      () => {
         async function create() {
            const olMap = await createMap(mapDocument);
            const vectorLayer = getLayer(olMap, 'features');
            const legend = await createLegend(vectorLayer);
            const features = vectorLayer.getSource().getFeatures()

            addStyling(features, legend);
            setLegend(legend);
            setMap(olMap);
            setFeatures(features);
         }

         if (mapDocument) {
            create();
         }
      },
      [mapDocument]
   );

   useEffect(
      () => {
         if (!map) {
            return;
         }

         map.setTarget(mapElement.current);

         const vectorLayer = getLayer(map, 'features');
         const extent = vectorLayer.getSource().getExtent();
         const view = map.getView();

         view.fit(extent, map.getSize());
         view.setMinZoom(Math.floor(view.getZoom() - 2));
         view.setMaxZoom(18);

         map.addControl(new ZoomToExtent({ extent }));
         addMapInteraction();

         window.addEventListener('resize', onWindowResize)

         return () => {
            map.dispose();
            window.removeEventListener('resize', onWindowResize);
            setSelectedFeatures([]);
         }
      },
      [map, selectFeature, addMapInteraction, onWindowResize]
   );

   useEffect(
      () => {
         if (features.length && legend.length) {
            addLegendToFeatures(features, legend);
         }
      },
      [features, legend]
   );

   useEffect(
      () => {
         if (symbol.name) {
            toggleFeatures(symbol, map);
         }
      },
      [symbol, map]
   );

   useEffect(
      () => {
         if (map && sidebar.visible !== sidebarVisible.current) {
            map.updateSize();
            sidebarVisible.current = sidebar.visible;
         }
      },
      [sidebar, map]
   );

   function handleLegendSorted(sortedLegend) {
      if (sortedLegend.every((symbol, index) => symbol.name === legend[index].name)) {
         return;
      }

      updateFeatureZIndex(map, sortedLegend);
      setLegend(sortedLegend);
   }

   return (
      <div className={`content ${!sidebar.visible ? 'sidebar-hidden' : ''}`}>
         <div className="left-content">
            <MapInfo mapDocument={mapDocument} map={map} />
            <Legend legend={legend} onListSorted={handleLegendSorted} />
         </div>

         <div className="right-content">
            <div className="map-container">
               <div ref={mapElement} className="map"></div>
            </div>

            <FeatureContextMenu map={map} data={contextMenuData} legend={legend} onFeatureSelect={selectFeature} />
            <FeatureInfo map={map} features={selectedFeatures} legend={legend} />
            <ValidationErrors map={map} validationResult={mapDocument?.validationResult} onMessageClick={selectFeature} />
         </div>
      </div>
   );
}

export default MapView;