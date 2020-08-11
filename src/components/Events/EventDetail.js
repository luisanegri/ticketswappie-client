import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EventDetail({ event }) {
  return (
    <React.Fragment>
      <Container
        fluid
        style={{ backgroundColor: '#F3F0FB', height: '400px' }}
        className="event-info"
      >
        <Row className="row-w row-badge-event">
          <Col md={8} className="col-left">
            <div
              style={{
                backgroundImage: `url(${event.start_date})`,
                backgroundSize: '100% 100%',
                height: '350px',
                width: '100%',
              }}
            ></div>
          </Col>
          <Col md={4} className="col-right">
            <p>{event.image}</p>
            <p style={{ textTransform: 'capitalize' }}>{event.name}</p>
            <p>€{event.price}</p>
          </Col>
        </Row>
        <Row className="row-w row-badge-bottom">
          <Col md={8} className="col-left">
            <Link
              to="/event"
              id="back-link"
              style={{ bottom: '0px', position: 'absolute' }}
            >
              back to events
            </Link>
          </Col>
          <Col md={2}>
            <Button id="btn-red">
              <Link to={`/event/${event.id}/ticket/create`}>Sell ticket</Link>
            </Button>
          </Col>
          <Col md={2}>
            <Button id="btn-green">
              <Link to={`/event/${event.id}/ticket`}>View tickets</Link>
            </Button>
          </Col>
        </Row>
        <article>
          <Row className="row-w row-content">
            <Col md={12} className="full">
              <h6>About this event</h6>
              <p>{event.description}</p>
              <h6>Information</h6>
              <p style={{ fontSize: '15px' }}>{event.name}</p>
              <span> In </span>
              <span>{event.location}</span>
              <span> on the </span>
              <span>{event.image}</span>
            </Col>
          </Row>
        </article>
      </Container>
    </React.Fragment>
  );
}
