import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../App.css';
import { Form, Button, Container } from 'react-bootstrap';

const TicketForm = ({ value, onChange, onSubmit, history }) => {
  return (
    <Container>
      <div className="ticket-form">
        <h1>Ticket Information</h1>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Price"
              onChange={onChange}
              value={value.price}
              name="price"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              type="text"
              placeholder="Description"
              onChange={onChange}
              value={value.description}
              name="description"
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Image"
              onChange={onChange}
              value={value.image}
              name="image"
            />
          </Form.Group>
          <Button id="back-link-btn" onClick={() => history.goBack()}>
            back to event
          </Button>
          <Button
            type="submit"
            id="btn-red"
            className="btn-form"
            style={{ float: 'right' }}
          >
            Sell
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default withRouter(TicketForm);
