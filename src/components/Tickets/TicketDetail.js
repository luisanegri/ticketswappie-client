import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

export default function TicketDetail(props) {
  return (
    <Container>
      <div className="wrapper event-detail">
        <Row>
          <Col>
            <img src={props.ticket.image} />
          </Col>
          <Col className="col-right">
            <div className=" hold-info">
              <p>Price: {props.ticket.price}</p>
              <p>Description: {props.ticket.description}</p>
              <p>Seller: {props.ticket.username}</p>
              <p>Risk: {props.ticket.risk}%</p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
