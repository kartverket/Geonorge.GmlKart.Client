import { Button, Modal } from 'react-bootstrap';
import { useModals } from 'context/ModalsContext';

function ErrorModal(props) {
   const { closeModal } = useModals();
   const { message } = props;

   function handleOnHide() {
      closeModal('ERROR');
   }

   return (
      <Modal show={true} onHide={handleOnHide} animation={false} centered dialogClassName="error-dialog">
         <Modal.Header closeButton>
            <Modal.Title>En feil har oppstått...</Modal.Title>
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

export default ErrorModal;