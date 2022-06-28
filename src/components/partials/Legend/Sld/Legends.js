import { useState } from 'react';
import Legend from './Legend/Legend';
import './Legends.scss';

function Legends({ legend }) {
   const [showAll, setShowAll] = useState(false);

   if (!legend.length) {
      return null;
   }

   function handleCheckboxChange(event) {
      setShowAll(event.target.checked);
   }

   return (
      <div className={`sld-legend box ${showAll ? 'sld-legend-show-all' : ''}`}>
         <div className="box-header">Tegnforklaringer</div>

         <div className="box-content">
            <div className="show-all">
               <label className="checkbox">
                  <input type="checkbox" defaultChecked={false} onChange={handleCheckboxChange} />
                  <span className="checkmark"></span>Vis alle
               </label>
            </div>

            <div className="legend-list">
               {legend.map((leg, index) => <Legend legend={leg} key={'symbol-' + index} />)}
            </div>
         </div>
      </div>
   );
}

export default Legends;