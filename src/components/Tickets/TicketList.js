import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function TicketList(props) {
  console.log('ticket list', props);
  return (
    <div>
      {props.tickets.map(ticket => (
        <div>
          <img src={ticket.image} />
          <p>{ticket.price}</p>
          <p>{ticket.description}</p>
          <Link to={`/ticket/${ticket.id}`}>Details</Link>
        </div>
      ))}

      <Link to={`/event/${props.events.eventId}/ticket/create`}>
        <Button>Create a ticket</Button>
      </Link>
    </div>
  );
}
