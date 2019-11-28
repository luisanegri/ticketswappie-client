import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EventDetail(props) {
  console.log('event detail props', props);
  return (
    <div className="wrapper event-detail">
      <Row>
        <Col>
          <img src={props.event.image} />
        </Col>
        <Col className="col-right">
          <div className=" hold-info">
            <p>Event name: {props.event.name}</p>
            <p>Description: {props.event.description}</p>
            <p>Start date: {props.event.start_date}</p>
            <p>End date: {props.event.end_date}</p>
          </div>
          <Button variant="primary">View Tickets</Button>
          <Row className="row-btn">
            <Col>
              <Button>
                <Link to={`/event/${props.event.id}/ticket`}>view tickets</Link>
              </Button>
            </Col>
            <Col>
              <Button>
                <Link to={`/event/${props.event.id}/ticket/create`}>
                  create ticket
                </Link>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
