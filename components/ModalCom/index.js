import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalCom({open, title, text, approve, refuse}) {
  const handleApproval = () => {
		approve();
	}
	
  const handleRefutation = () => {
		refuse();
	}

  return (
    <Modal show={open} onHide={handleRefutation}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{text}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleRefutation} variant="secondary">Close</Button>
          <Button onClick={handleApproval} variant="primary">Remove</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}

export default ModalCom;