import React from 'react';
import '../../App.css';
import { Form, Button, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EventForm(props) {
  return (
    <Container>
      <div className="wrapper event-form">
        <h1>Create an Event</h1>
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
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>Start date</Form.Label>
              <Form.Control
                type="text"
                placeholder="Start date"
                name="start_date"
                value={props.value.start_date}
                onChange={props.onChange}
              />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationFormik04">
              <Form.Label>End date</Form.Label>
              <Form.Control
                type="text"
                placeholder="End date"
                name="end_date"
                value={props.value.end_date}
                onChange={props.onChange}
              />
            </Form.Group>
          </Form.Row>
          <Button type="submit">Create Event</Button>
        </Form>
      </div>
    </Container>
  );
}
