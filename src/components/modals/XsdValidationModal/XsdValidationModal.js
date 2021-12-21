import { Button, Modal } from 'react-bootstrap';
import { useModals } from 'context/ModalsContext';
import './XsdValidationModal.scss';

function XsdValidationModal({ fileName, messages }) {
   const { closeModal } = useModals();

   function handleOnHide() {
      closeModal('XSD_VALIDATION');
   }

   return (
      <Modal show={true} onHide={handleOnHide} animation={false} centered dialogClassName="default-dialog">
         <Modal.Header closeButton>
            <Modal.Title>Skjemavalidering for GML-plankart</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <p>Filen "{fileName}" er ikke i henhold til oppgitt applikasjonsskjema:</p>

            <ul className="messages">
               {messages.map((message, index) => <li key={index}>{message}</li>)}
            </ul>
         </Modal.Body>
         <Modal.Footer>
            <Button variant="primary" onClick={handleOnHide}>Lukk</Button>
         </Modal.Footer>
      </Modal>
   );
};

export default XsdValidationModal;