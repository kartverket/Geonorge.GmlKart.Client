import { useState } from 'react';
import { getSymbolById, zoomTo } from 'utils/map/helpers';
import featuresConfig from 'config/features.config';
import get from 'lodash.get';
import './FeatureInfo.scss';

function FeatureInfo({ map, features, legend }) {
   const [expanded, setExpanded] = useState(true);

   function toggle() {
      setExpanded(!expanded);
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
               {errorMessages.map((message, index) => <li key={`${feature.get('id')}-error-${index}`}>{message}</li>)}
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