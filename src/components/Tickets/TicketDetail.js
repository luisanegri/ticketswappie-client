import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../../App.css';

export default function TicketDetail(props) {
  console.log('ticket props', props);
  return (
    <div className="ticket-detail">
      <div className="ticketCard">
        <Row>
          <Col>
            <img src={props.ticket.image} width="300" height="363" />
          </Col>
          <Col className="col-right">
            <div className="hold-info">
              <h4 className="info">{props.event.name}Test Name</h4>
              <p className="info">Seller: {props.ticket.username}</p>
              <p className="info">Price: €{props.ticket.price}</p>
              <p className="info">Description: {props.ticket.description}</p>

              <span>Risk: {props.ticket.risk}%</span>
              <span>
                {props.ticket.risk < 15 ? (
                  <i className="fa fa-circle risk-green"></i>
                ) : null}
                {props.ticket.risk > 15 && props.ticket.risk < 55 ? (
                  <i className="fa fa-circle risk-yellow"></i>
                ) : null}
                {props.ticket.risk > 55 ? (
                  <i className="fa fa-circle risk-red"></i>
                ) : null}
              </span>
            </div>
          </Col>
        </Row>
        <Row className="tick-btns-action">
          <Col>{/* <Button>comment</Button> */}</Col>
          <Col>
            <Button>Buy</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
