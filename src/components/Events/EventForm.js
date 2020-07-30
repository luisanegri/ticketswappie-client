import React from 'react';
import '../../App.css';
import { Form, Button, Col, Container } from 'react-bootstrap';

export default function EventForm(props) {
  return (
    <Container>
      <div className="event-form">
        <h1>Event Information</h1>
        <Form onSubmit={props.onSubmit}>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Event name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Event name"
              onChange={props.onChange}
              value={props.value.name}
              name="name"
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Price"
                name="price"
                value={props.value.price}
                onChange={props.onChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik04">
              <Form.Label>Start date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Start date"
                name="start_date"
                value={props.value.start_date}
                onChange={props.onChange}
              />
            </Form.Group>
          </Form.Row>
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
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Location"
              onChange={props.onChange}
              value={props.value.location}
              name="location"
            />
          </Form.Group>
          <Button type="submit" id="btn-red" className="btn-form">
            Create Event
          </Button>
        </Form>
      </div>
    </Container>
  );
}
