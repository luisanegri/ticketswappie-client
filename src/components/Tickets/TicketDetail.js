import React from 'react';
import CommentForm from '../Comments/CommentForm';
import { Route } from 'react-router-dom';

export default function TicketDetail(props) {
  console.log('read ticket props', props);
  return (
    <div>
      <p>{props.ticket.price}</p>
      <CommentForm />
    </div>
  );
}
