import React from 'react';
import { Col, Row, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EventDetail(props) {
  return (
    <Container>
      <div className="wrapper event-detail">
        <Row>
          <Col>
            <img src={props.event.end_date} />
          </Col>
          <Col className="col-right">
            <div className=" hold-info">
              <p>Event name: {props.event.name}</p>
              <p>Description: {props.event.description}</p>
              <p>Start date: {props.event.start_date}</p>
              <p>End date: {props.event.image}</p>
            </div>
            <Row className="row-btn">
              <Col>
                <Button>
                  <Link to={`/event/${props.event.id}/ticket`}>
                    view tickets
                  </Link>
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
    </Container>
  );
}
