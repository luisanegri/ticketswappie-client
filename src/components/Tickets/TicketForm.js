import React from 'react';
import '../../App.css';
import { Form, Button, Col } from 'react-bootstrap';

export default function TicketForm(props) {
  return (
    <div className="wrapper ticket-form">
      <h1>Sell a ticket</h1>
      <Form onSubmit={props.onSubmit}>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Price"
            onChange={props.onChange}
            value={props.value.price}
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
            onChange={props.onChange}
            value={props.value.description}
            name="description"
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="text"
            placeholder="Image"
            onChange={props.onChange}
            value={props.value.image}
            name="image"
          />
        </Form.Group>
        <Button type="submit">Create Ticket</Button>
      </Form>
    </div>
  );
}
