import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EventDetail(props) {
  return (
    <React.Fragment>
      <Container
        fluid
        style={{ backgroundColor: '#F3F0FB', height: '400px' }}
        className="event-info"
      >
        <Row className="row-w row-badge-event">
          <Col md={8} className="col-left">
            <img
              src={props.event.start_date}
              style={{ width: '100%', height: '350px' }}
              alt="Event"
            />
          </Col>
          <Col md={4} className="col-right">
            <p>{props.event.image}</p>
            <p style={{ textTransform: 'capitalize' }}>{props.event.name}</p>
            <p>€{props.event.price}</p>
          </Col>
        </Row>
        <Row className="row-w row-badge-bottom">
          <Col md={8} className="col-left"></Col>
          <Col md={2}>
            <Button id="btn-red">
              <Link to={`/event/${props.event.id}/ticket/create`}>
                Sell ticket
              </Link>
            </Button>
          </Col>
          <Col md={2}>
            <Button id="btn-green">
              <Link to={`/event/${props.event.id}/ticket`}>View tickets</Link>
            </Button>
          </Col>
        </Row>
        <article>
          <Row className="row-w row-content">
            <Col md={12} className="full">
              <h6>About this event</h6>
              <p>{props.event.description}</p>
              <h6>Information</h6>
              <p style={{ fontSize: '15px' }}>{props.event.name}</p>
              <span> In </span>
              <span>{props.event.location}</span>
              <span> on the </span>
              <span>{props.event.image}</span>
            </Col>
          </Row>
        </article>
      </Container>
    </React.Fragment>
  );
}
