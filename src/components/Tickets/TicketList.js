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
      <div className="ticket-list">
        <h1 style={{ textAlign: 'center' }}>Tickets available</h1>
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
            {props.tickets.map((ticket) => (
              <tbody>
                <tr>
                  <td>€ {ticket.price}</td>
                  <td>
                    <Button className="btn-ticket-detail" id="btn-red">
                      <Link to={`/ticket/${ticket.id}`}>
                        <i class="fa fa-eye"></i>
                      </Link>
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
