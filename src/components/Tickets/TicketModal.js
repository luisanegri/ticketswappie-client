import React from 'react';
import { Modal } from 'react-bootstrap';
import EditTicketContainer from './EditTicketContainer';

const TicketModal = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={showModal}>Display Modal</button>
      <Modal show={isOpen} onHide={hideModal}>
        <Modal.Header>
          <Modal.Title>Hi</Modal.Title>
          <EditTicketContainer />
        </Modal.Header>
      </Modal>
    </div>
  );
};

export default TicketModal;
