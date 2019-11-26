import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';

export default function EventDetail(props) {
  console.log('event detail props', props);
  return (
    <div className="wrapper event-detail">
      <Row>
        <Col>
          <img src={props.events.image} />
        </Col>
        <Col className="col-right">
          <div className=" hold-info">
            <p>Event name: {props.events.name}</p>
            <p>Description: {props.events.description}</p>
            <p>Start date: {props.events.start_date}</p>
            <p>End date: {props.events.end_date}</p>
          </div>
          <Button variant="primary">View Tickets</Button>
        </Col>
      </Row>
    </div>
  );
}
