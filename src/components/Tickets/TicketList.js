import React from 'react';

export default function TicketList(props) {
  console.log('ticket list', props);
  return (
    <div>
      {props.tickets.map(ticket => (
        <div>
          <p>{ticket.image}</p>
          <p>{ticket.price}</p>
          <p>{ticket.description}</p>
        </div>
      ))}
    </div>
  );
}
