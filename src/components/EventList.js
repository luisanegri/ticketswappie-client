import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
export default function EventList(props) {
  console.log(props);
  return (
    <div className="wrapper event-list">
      <h1>Events</h1>
      <Row>
        {props.events.map(event => (
          <Col>
            <Link to="/">
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
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
