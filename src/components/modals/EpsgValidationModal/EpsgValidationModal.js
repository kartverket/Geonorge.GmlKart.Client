import { Button, Modal } from 'react-bootstrap';
import { useModals } from 'context/ModalsContext';
import './EpsgValidationModal.scss';

function EpsgValidationModal({ fileName, messages }) {
   const { closeModal } = useModals();

   function handleOnHide() {
      closeModal('EPSG_VALIDATION');
   }

   return (
      <Modal show={true} onHide={handleOnHide} animation={false} centered dialogClassName="default-dialog">
         <Modal.Header closeButton>
            <Modal.Title>Koordinatreferansesystem for kart i 2D</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <p>Filen "{fileName}" har ugyldig koordinatreferansesystem:</p>

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

export default EpsgValidationModal;