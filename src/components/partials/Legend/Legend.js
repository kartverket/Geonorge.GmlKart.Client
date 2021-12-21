import Symbol from './Symbol/Symbol';
import './Legend.scss';

function Legend({ legend }) {
   if (!legend.length) {
      return null;
   }

   return (
      <div className="legend box">
         <div className="box-header">Tegnforklaringer</div>

         <div className="box-content">
            <div className="symbols">
               {legend.map((symbol, index) => <Symbol symbol={symbol} key={'symbol-' + index} />)}
            </div>
         </div>
      </div>
   );
}

export default Legend;