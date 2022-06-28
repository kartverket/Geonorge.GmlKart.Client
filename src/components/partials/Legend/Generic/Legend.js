import { ReactSortable } from 'react-sortablejs';
import Symbol from './Symbol/Symbol';
import './Legend.scss';

function Legend({ legend, onListSorted }) {
   if (!legend.length) {
      return null;
   }

   return (
      <div className="generic-legend box">
         <div className="box-header">Tegnforklaringer</div>

         <div className="box-content">
            <div className="symbols">
               <ReactSortable list={legend} setList={onListSorted}>
                  {legend.map(symbol => <Symbol symbol={symbol} key={'symbol-' + symbol.id} />)}
               </ReactSortable>
            </div>
         </div>
      </div>
   );
}

export default Legend;