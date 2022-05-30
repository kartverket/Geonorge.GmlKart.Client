import { baseMap } from 'config/baseMap.config';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getScaleForResolution } from 'utils/map/scale';
import { ScaleBar } from 'components/partials';
import NorthArrow from 'assets/gfx/symbol-north-arrow.svg';
import './MapInfo.scss';

function MapInfo({ mapDocument, map }) {
   const prevResolution = useRef(0);
   const [scale, setScale] = useState(null);
   const [rotation, setRotation] = useState(0);

   const getScale = useCallback(
      event => {
         const view = event.target.getView();
         const resolution = view.getResolution();

         if (resolution !== prevResolution.current) {
            setScale(getScaleForResolution(view));
            prevResolution.current = resolution;
         }
      },
      []
   );

   useEffect(
      () => {
         if (!map) {
            return;
         }

         const view = map.getView();

         if (view) {
            view.on('change:rotation', event => {
               const rotation = event.target.getRotation();
               setRotation(rotation);
            });
         }

         map.on('moveend', getScale);

         return () => {
            map.un('moveend', getScale);
         };
      },
      [map, getScale]
   );

   if (!mapDocument || !map) {
      return null;
   }

   return (
      <div className="map-info box">
         <div className="box-header">Kartopplysninger</div>

         <div className="box-content">
            <div>
               <div className="box-row">
                  <div className="label">Kilde for basiskart:</div>
                  <div className="value">{baseMap.name}</div>
               </div>

               <div className="box-row">
                  <div className="label">Koordinatsystem:</div>
                  <div className="value">{mapDocument.epsg.description}</div>
               </div>
            </div>
            <div>
               <div className="box-row">
                  <div className="label">Ekvidistanse:</div>
                  <div className="value">{baseMap.equidistance} m</div>
               </div>

               <div className="box-row">
                  <div className="label">Kartmålestokk:</div>
                  <div className="value">{scale}</div>
               </div>

               <ScaleBar map={map} numberOfSteps={4} minWidth={150} />

               <div className="north-arrow">
                  <span>N</span>
                  <img src={NorthArrow} style={{ transform: `rotate(${rotation}rad)` }} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}

export default MapInfo;