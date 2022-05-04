import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFeatureInfo } from 'store/slices/mapSlice';
import { getSymbolById, zoomTo, zoomToPoint } from 'utils/map/helpers';
import featuresConfig from 'config/features.config';
import get from 'lodash.get';
import './FeatureInfo.scss';

function FeatureInfo({ map, features, legend }) {
   const [expanded, setExpanded] = useState(false);
   const featureInfo = useSelector(state => state.map.featureInfo);
   const dispatch = useDispatch();

   useEffect(
      () => {
         setExpanded(featureInfo.expanded);
      },
      [featureInfo]
   );

   function toggle() {
      dispatch(toggleFeatureInfo({ expanded: !expanded }));
   }

   function getFeatureInfo(feature) {
      const propNames = featuresConfig[feature.get('name')] || [];

      if (!propNames.length) {
         return null;
      }

      const properties = feature.getProperties();
      const featureId = feature.get('id');

      return (
         propNames.map((propName) => {
            const path = propName.split('.');
            const label = path[path.length - 1];
            const value = get(properties, propName);

            return value ?
               <div className="box-row" key={`${featureId}-${propName}`}>
                  <div className="label capitalize">{label}:</div>
                  <div className="value">{value}</div>
               </div> :
               null
         })
      );
   }

   function getGeometryInfo(feature) {
      let label, value;
      const area = feature.get('_area');
      const length = feature.get('_length');

      if (area) {
         label = 'Areal';
         value = area;
      } else if (length) {
         label = 'Lengde';
         value = length;
      } else {
         return null;
      }

      return (
         <div className="box-row">
            <div className="label">{label}:</div>
            <div className="value">{value}</div>
         </div>
      );
   }


   function getSymbolImage(id) {
      return getSymbolById(legend, id)?.image;
   }

   function getErrorMessages(feature) {
      const errorMessages = feature.get('errorMessages');

      if (!errorMessages?.length) {
         return null;
      }

      return (
         <div className="error-messages">
            <h5>Valideringsfeil:</h5>
            <ol>
               {errorMessages.map((message, index) => {
                  return (
                     <li key={`${feature.get('id')}-error-${index}`}>
                        {message.message}
                        {
                           message.zoomTo ?
                              <span role="button" onClick={() => zoomToPoint(map, feature)}>Zoom til punkt</span> :
                              null
                        }
                     </li>
                  )
               })}
            </ol>
         </div>
      );
   }

   if (!map || !features.length) {
      return null;
   }

   return (
      <div className={`feature-info box ${expanded ? 'box-expanded' : ''}`}>
         <div className="box-header expand-button" role="button" onClick={toggle}>Objekt</div>

         <div className="box-content">
            {
               features.map(feature => {
                  return (
                     <div className="feature" key={feature.get('id')}>
                        <div className="header">
                           {
                              feature.get('symbolId') ?
                                 <img src={getSymbolImage(feature.get('symbolId'))} alt="" /> :
                                 null
                           }
                           <span className="name">{feature.get('name')}</span>
                           <button className="zoom" onClick={() => zoomTo(map, [feature])} title="Gå til objekt"></button>
                        </div>

                        <div className="box-row">
                           <div className="label">GML-ID:</div>
                           <div className="value">{feature.get('id')}</div>
                        </div>

                        {getFeatureInfo(feature)}

                        {getGeometryInfo(feature)}

                        {getErrorMessages(feature)}
                     </div>
                  );
               })
            }
         </div>
      </div>
   );
}

export default FeatureInfo;