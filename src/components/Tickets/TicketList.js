import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Table, Container } from 'react-bootstrap';
import '../../App.css';

export default function TicketList(props) {
  const empty = !props.tickets.length;
  if (empty) {
    return <p className="info-message">No tickets available</p>;
  }
  return (
    <Container>
      <div className="wrapper ticket-list">
        <h1>Tickets available</h1>
        <Row>
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <p>Price</p>
                </th>
                <th>
                  <p className="tb-lbl"></p>
                </th>
              </tr>
            </thead>
            {props.tickets.map(ticket => (
              <tbody>
                <tr>
                  <td>€ {ticket.price}</td>
                  {/* <td className="btn-delete">
                    <Button
                      onClick={() => props.deleteTicket(ticket.id)}
                      id="btn-ticket-delete"
                    >
                      Delete
                    </Button>
                  </td> */}
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
    </Container>
  );
}
