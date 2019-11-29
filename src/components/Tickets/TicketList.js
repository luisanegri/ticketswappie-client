import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Row, Card, Table } from 'react-bootstrap';
import '../../App.css';

export default function TicketList(props) {
  const empty = !props.tickets.length;
  if (empty) {
    return <p className="info-message">No tickets available</p>;
  }
  return (
    <div className="wrapper ticket-list">
      <h1>Tickets available</h1>
      <Row>
        <Table responsive>
          <thead>
            <tr>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          {props.tickets.map(ticket => (
            <tbody>
              <tr>
                <td>€ {ticket.price}</td>
                <td>
                  <Button id="btn-ticket-detail">
                    <Link to={`/ticket/${ticket.id}`}>Details</Link>
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </Row>
    </div>
  );
}
