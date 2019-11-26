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
  request
    .post(`${baseUrl}/event/${eventId}/ticket`)
    .send({ price, description, image, eventId })
    .then(response => {
      console.log(response);
      const action = createTicketSuccess(response.text);
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
      console.log('read ticker action', action);
      dispatch(action);
    })
    .catch(console.error);
};

export const readTicketSuccess = ticket => ({
  type: READ_TICKET,
  payload: ticket
});

export const readTicket = (id, ticket) => dispatch => {
  console.log('readTicket id', id);
  request
    .get(`${baseUrl}/event/${id}`)
    .send(ticket)
    .then(response => {
      console.log('readTicket response', response);
      dispatch(readTicketSuccess(response.body));
    })
    .catch(console.error);
};
