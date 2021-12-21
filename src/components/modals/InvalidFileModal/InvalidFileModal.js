import { Button, Modal } from 'react-bootstrap';
import { useModals } from 'context/ModalsContext';

function InvalidFileModal(props) {
   const { closeModal } = useModals();
   const { message } = props;

   function handleOnHide() {
      closeModal('INVALID_FILE');
   }

   return (
      <Modal show={true} onHide={handleOnHide} animation={false} centered dialogClassName="error-dialog">
         <Modal.Header closeButton>
            <Modal.Title>Ugyldig fil</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            {message}
         </Modal.Body>
         <Modal.Footer>
            <Button variant="primary" onClick={handleOnHide}>Lukk</Button>
         </Modal.Footer>
      </Modal>
   );
};

export default InvalidFileModal;