import React from 'react';
import { withRouter } from 'react-router-dom';

import { Row, Col, Button } from 'react-bootstrap';
import '../../App.css';

const TicketDetail = ({ ticket, history }) => {
  console.log('hisotyr', history.location.pathname);
  return (
    <div className="ticket-detail">
      <div className="ticketCard">
        <Row>
          <Col>
            <img src={ticket.image} width="300" height="363" alt="ticket" />
          </Col>
          <Col className="col-right">
            <div className="hold-info">
              <p className="info">Seller: {ticket.username}</p>
              <p className="info">Price: €{ticket.price}</p>
              <p className="info">Description: {ticket.description}</p>

              <span>Risk: {ticket.risk}%</span>
              <span>
                {ticket.risk < 15 ? (
                  <i className="fa fa-circle risk-green"></i>
                ) : null}
                {ticket.risk > 15 && ticket.risk < 55 ? (
                  <i className="fa fa-circle risk-yellow"></i>
                ) : null}
                {ticket.risk > 55 ? (
                  <i className="fa fa-circle risk-red"></i>
                ) : null}
              </span>
            </div>
          </Col>
        </Row>
        <Row className="tick-btns-action">
          <Col>
            <Button
              id="back-link"
              style={{ bottom: '0px', position: 'absolute' }}
              onClick={() => history.goBack()}
            >
              back to tickets
            </Button>
          </Col>
          <Col>
            <Button id="btn-red">Buy</Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default withRouter(TicketDetail);
