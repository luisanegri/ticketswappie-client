import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Table, Container } from 'react-bootstrap';
import '../../App.css';

export default function TicketList(props) {
  console.log('list', props);
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
                  <p>Risk</p>
                </th>
                <th></th>
                <th>
                  <p className="tb-lbl">Details</p>
                </th>
              </tr>
            </thead>
            {props.tickets.map(ticket => (
              <tbody>
                <tr>
                  <td>€ {ticket.price}</td>
                  <td>
                    {ticket.risk < 15 ? (
                      <i className="fa fa-circle risk-green"></i>
                    ) : null}
                    {ticket.risk > 15 && ticket.risk < 55 ? (
                      <i className="fa fa-circle risk-yellow"></i>
                    ) : null}
                    {ticket.risk > 55 ? (
                      <i className="fa fa-circle risk-red"></i>
                    ) : null}
                  </td>

                  <td>
                    <Button onClick={() => props.deleteTicket(ticket.id)}>
                      Delete
                    </Button>
                  </td>

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
