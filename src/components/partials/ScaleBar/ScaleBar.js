import { useState, useEffect, useRef, useCallback } from 'react';
import { createScaleBar } from 'utils/map/scale';
import './ScaleBar.scss';

function ScaleBar({ map, numberOfSteps, minWidth }) {
   const prevResolution = useRef(0);
   const [scaleBar, setScaleBar] = useState(null);

   const create = useCallback(
      event => {
         const view = event.target.getView();
         const resolution = view.getResolution();

         if (resolution !== prevResolution.current) {
            setScaleBar(createScaleBar(view, numberOfSteps, minWidth, 300));
            prevResolution.current = resolution;
         }       
      },
      [numberOfSteps, minWidth]
   );

   useEffect(
      () => {
         if (!map) {
            return;
         }

         map.on('moveend', create);

         return () => {
            map.un('moveend', create);
         };
      },
      [map, create]
   );

   return scaleBar;
}

export default ScaleBar;