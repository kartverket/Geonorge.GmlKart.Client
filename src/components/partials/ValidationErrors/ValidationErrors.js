import { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getFeatureById, getLayer, zoomTo } from 'utils/map/helpers';
import './ValidationErrors.scss';

function ValidationErrors({ map, validationResult, onMessageClick }) {
   const [expanded, setExpanded] = useState(false);
   const validationResultId = useRef(null);
   const rules = validationResult?.rules || [];

   useEffect(
      () => {
         if (validationResult?.Id !== validationResultId.current) {
            setExpanded(false);
         }
      },
      [validationResult]
   );

   function toggle() {
      setExpanded(!expanded);
   }

   function handleMessageClick(gmlIds) {
      const featureLayer = getLayer(map, 'features');
      const features = gmlIds.map(gmlId => getFeatureById(featureLayer, gmlId));

      onMessageClick(features);
      zoomTo(map, features);
   }

   function getErrorCount() {
      return rules.flatMap(rule => rule.messages).length;
   }

   if (!rules.length) {
      return null;
   }

   return (
      <div className={`validation-errors box ${expanded ? 'box-expanded' : ''}`}>
         <div className="box-header expand-button" role="button" onClick={toggle}>Valideringsfeil ({getErrorCount()})</div>

         <div className="box-content">
            <div className="rules">
               {
                  rules.map(rule => {
                     return (
                        <div className="rule" key={rule.id}>
                           <div className="rule-name">{rule.id}: {rule.name} ({rule.messages.length})</div>
                           <ol className="messages">
                              {
                                 rule.messages.map((message, index) => {
                                    const messageId = `${rule.id}-${index}`;

                                    return (
                                       <li key={messageId}>
                                          <Button variant="link" onClick={() => handleMessageClick(message.gmlIds)}>{message.message}</Button>
                                       </li>
                                    );
                                 })
                              }
                           </ol>
                        </div>
                     );
                  })
               }
            </div>
         </div>
      </div>
   );
}

export default ValidationErrors;