import React from 'react';
import CommentForm from '../Comments/CommentForm';
import { Row, Col } from 'react-bootstrap';
export default function TicketDetail(props) {
  console.log('read ticket props', props);
  return (
    <div className="wrapper event-detail">
      <Row>
        <Col>
          <img src={props.ticket.image} />
        </Col>
        <Col className="col-right">
          <div className=" hold-info">
            <p>Event name: {props.ticket.price}</p>
            <p>Description: {props.ticket.description}</p>
            <p>Seller: {props.ticket.userId}</p>
          </div>
        </Col>
      </Row>
      {/* <CommentForm /> */}
    </div>
  );
}
