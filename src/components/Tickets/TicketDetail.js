import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../../App.css';

export default function TicketDetail(props) {
  console.log('ticket detail props', props);
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
              <span>Risk: {props.ticket.risk}%</span>
              <span>
                {props.ticket.risk < 15 ? (
                  <i className="fa fa-circle risk-green">low risk</i>
                ) : null}
                {props.ticket.risk > 15 && props.ticket.risk < 55 ? (
                  <i className="fa fa-circle risk-yellow">medium risk</i>
                ) : null}
                {props.ticket.risk > 55 ? (
                  <i className="fa fa-circle risk-red">high risk</i>
                ) : null}
              </span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
