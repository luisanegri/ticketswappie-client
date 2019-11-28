import React from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function EventList(props) {
  console.log(props);
  const empty = !props.events.length;
  if (empty) {
    return <p className="info-message">No events</p>;
  }
  return (
    <div className="wrapper event-list">
      <h1>Events</h1>
      <Row>
        {props.events.map(event => (
          <Col md={4} className="col-cards">
            <Card key={event.id}>
              <Card.Body>
                <Row>
                  <Col>
                    <div className="info-date">{event.start_date}</div>
                  </Col>
                  <Col>
                    <span>{event.name}</span>
                  </Col>
                </Row>
                <Row className="row-btn">
                  <Col>
                    <Button>
                      <Link to={`/event/${event.id}/ticket`}>view tickets</Link>
                    </Button>
                  </Col>
                  <Col>
                    <Button>
                      <Link to={`/event/${event.id}/ticket/create`}>
                        create ticket
                      </Link>
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
