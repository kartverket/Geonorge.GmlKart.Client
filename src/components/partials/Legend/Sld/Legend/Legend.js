import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleLegend } from 'store/slices/mapSlice';

function Legend({ legend }) {
   const [expanded, setExpanded] = useState(true);
   const dispatch = useDispatch();
   
   function handleClick() {
      setExpanded(!expanded);
   }

   function handleCheckboxChange(event) {
      dispatch(toggleLegend({ name: legend.name, visible: event.target.checked }));
   }

   return (
      <div className={`legend ${expanded ? 'legend-expanded' : ''} ${legend.hidden ? 'legend-hidden' : ''}`}>
         <div className="header">
            <label className="checkbox">
               <input type="checkbox" defaultChecked={true} onChange={handleCheckboxChange} />
               <span className="checkmark"></span>
            </label>

            <Button className="expand-button" variant="link" onClick={handleClick}>{legend.name}</Button>
         </div>

         <div className="symbols">
            {legend.symbols.map((symbol, index) => {
               return (
                  <div className={`symbol ${symbol.hidden ? 'symbol-hidden' : ''}`} key={'symbol-' + index}>
                     <img src={symbol.image} alt="" /><span title={symbol.rule.name}>{symbol.rule.name}</span>
                  </div>
               );
            })}
         </div>
      </div>
   );
}

export default Legend;