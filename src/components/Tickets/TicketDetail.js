import React from 'react';

export default function TicketDetail(props) {
  console.log('read ticket props', props);
  return <div>{props.ticket.price}</div>;
}
