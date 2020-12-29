import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EventList({ events, loading, error }) {
  if (loading) {
    return <div className="before">Loading...</div>;
  }
  if (error) {
    return <div className="before">ERROR: {error}</div>;
  }

  return (
    <Container>
      <div className="wrapper event-list" id="event-list">
        <h1>Events list</h1>
        <Row>
          {events.map((event) => (
            <Col md={6} className="cards-col">
              <Link to={`/event/${event.id}`}>
                <Card>
                  <Row>
                    <Col md={6}>
                      <div
                        style={{
                          backgroundImage: `url(${event.start_date})`,
                          backgroundSize: '100% 100%',
                          height: '122px',
                          width: '142px',
                        }}
                      ></div>
                    </Col>
                    <Col md={6} className="card-col-right">
                      <Card.Body>
                        <div className="card-text-wrapper">
                          <Card.Text>
                            <span>{event.image}</span>
                          </Card.Text>
                          <Card.Text>{event.name}</Card.Text>
                          <Card.Text>{event.location}</Card.Text>
                          <Card.Text>€{event.price}</Card.Text>
                        </div>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
}
