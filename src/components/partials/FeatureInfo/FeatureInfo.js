import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Tabs, Tab } from 'react-bootstrap';
import { toggleFeatureInfo } from 'store/slices/mapSlice';
import Feature from './Feature/Feature';
import './FeatureInfo.scss';

function FeatureInfo({ map, features, legend }) {
   const [expanded, setExpanded] = useState(false);
   const [activeKey, setActiveKey] = useState(0);
   const featureInfo = useSelector(state => state.map.featureInfo);
   const dispatch = useDispatch();

   useEffect(
      () => {
         setExpanded(featureInfo.expanded);
         setActiveKey(0);
      },
      [featureInfo]
   );

   function toggle() {
      dispatch(toggleFeatureInfo({ expanded: !expanded }));
   }

   function handleTabSelect(eventKey) {
      setActiveKey(eventKey);
   }

   if (!map || !features.length) {
      return null;
   }

   return (
      <div className={`feature-info box ${expanded ? 'box-expanded' : ''}`}>
         <div className="box-header expand-button" role="button" onClick={toggle}>Objekt</div>

         <div className="box-content">
            {
               features.length === 1 ?
                  <Feature feature={features[0]} map={map} legend={legend} /> :
                  <Tabs transition={false} activeKey={activeKey} onSelect={handleTabSelect}>
                     {
                        features.map((feature, index) => {
                           return (
                              <Tab eventKey={index} key={feature.get('id')} title={index + 1}>
                                 <Feature feature={feature} map={map} legend={legend} />
                              </Tab>
                           );
                        })
                     }
                  </Tabs>
            }
         </div>
      </div>
   );
}

export default FeatureInfo;