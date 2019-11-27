import request from 'superagent';
export const READ_TICKETS = 'READ_TICKETS';
export const CREATE_TICKET = 'CREATE_TICKET';
export const READ_TICKET = 'READ_TICKET';

const baseUrl = 'http://localhost:4000';

function createTicketSuccess(ticket) {
  return {
    type: CREATE_TICKET,
    payload: ticket
  };
}

export const createTicket = (
  price,
  description,
  image,
  eventId
) => dispatch => {
  console.log('id?????', eventId);
  console.log('price', price);
  console.log('description', description);
  console.log('image', image);
  request
    .post(`${baseUrl}/event/${eventId}/ticket`)
    .send({ price, description, image })
    .then(response => {
      console.log(response);
      const action = createTicketSuccess(response.body);
      console.log(action, 'action are you there?');
      dispatch(action);
    })
    .catch(console.error);
};

function readTicketsSuccess(tickets) {
  return {
    type: READ_TICKETS,
    payload: tickets
  };
}

export const readTickets = eventId => dispatch => {
  request
    .get(`${baseUrl}/event/${eventId}/ticket`)
    .then(response => {
      const action = readTicketsSuccess(response.body);
      console.log('read ticketsss action', action);
      dispatch(action);
    })
    .catch(console.error);
};

export const readTicketSuccess = ticket => ({
  type: READ_TICKET,
  payload: ticket
});

export const readTicket = ticketId => dispatch => {
  console.log('readTicket id', ticketId);
  request
    .get(`${baseUrl}/ticket/${ticketId}`)
    .then(response => {
      console.log('readTicket response', response);
      const action = readTicketSuccess(response.body);
      console.log('read ticket action', action);
      dispatch(action);
    })
    .catch(console.error);
};
