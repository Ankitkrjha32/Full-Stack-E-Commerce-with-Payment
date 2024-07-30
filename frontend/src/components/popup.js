import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PopUp = ({ show, handleClose }) => (
  <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Item Added to Cart</Modal.Title>
    </Modal.Header>
    <Modal.Body>Item has been successfully added to your cart.</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default PopUp;
