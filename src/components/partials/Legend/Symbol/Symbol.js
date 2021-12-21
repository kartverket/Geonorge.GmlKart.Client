import { useDispatch } from 'react-redux';
import { toggleSymbol } from 'store/slices/mapSlice';

function Symbol({ symbol }) {
   const dispatch = useDispatch();

   function handleCheckboxChange(event) {
      dispatch(toggleSymbol({ name: symbol.name, visible: event.target.checked }));
   }

   return (
      <div className="symbol">
         <label className="checkbox">
            <input type="checkbox" defaultChecked={true} onChange={handleCheckboxChange} />
            <span className="checkmark"></span>
         </label>

         <img src={symbol.image} alt="" />

         {symbol.name} ({symbol.featureCount})
      </div>
   )
}

export default Symbol;