import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './Rule.scss';

function Rule({ rule, onMessageClick }) {
   const [expanded, setExpanded] = useState(false);
   const title = `${rule.id}: ${rule.name} (${rule.messages.length})`;

   function toggle() {
      setExpanded(!expanded);
   }

   return (
      <div className={`rule ${!expanded ? 'rule-collapsed' : ''}`} role="button">
         <div className="rule-name" onClick={toggle}>
            <span title={title}>{title}</span>
         </div>
         <ol className="messages">
            {
               rule.messages.map((message, index) => {
                  const messageId = `${rule.id}-${index}`;

                  return (
                     <li key={messageId}>
                        <Button variant="link" onClick={() => onMessageClick(message.gmlIds)}>{message.message}</Button>
                     </li>
                  );
               })
            }
         </ol>
      </div>
   );
}

export default Rule;