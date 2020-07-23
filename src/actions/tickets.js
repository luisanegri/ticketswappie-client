import request from 'superagent';
export const READ_TICKETS = 'READ_TICKETS';
export const READ_TICKET = 'READ_TICKET';
export const CREATE_TICKET = 'CREATE_TICKET';
export const UPDATE_TICKET = 'UPDATE_TICKET';
export const DELETE_TICKET = 'DELETE_TICKET';

const baseUrl = 'http://localhost:4001';

function createTicketSuccess(ticket, eventId) {
  return {
    type: CREATE_TICKET,
    payload: ticket,
    eventId,
  };
}

export const createTicket = (price, description, image, eventId) => (
  dispatch,
  getState
) => {
  const state = getState();
  const jwt = state.users.jwt;
  const userId = state.users.id;
  const username = state.users.username;
  console.log('username', username);
  request
    .post(`${baseUrl}/event/${eventId}/ticket`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ price, description, image, userId, username })
    .then((response) => {
      const action = createTicketSuccess(response.body);
      console.log('ticket action', action);
      dispatch(action);
    })
    .catch(console.error);
};

function readTicketsSuccess(tickets) {
  return {
    type: READ_TICKETS,
    payload: tickets,
  };
}

export const readTickets = (eventId) => (dispatch, _getState) => {
  request
    .get(`${baseUrl}/event/${eventId}/ticket`)
    .then((response) => {
      const action = readTicketsSuccess(response.body);
      console.log('actiom', action);
      dispatch(action);
    })
    .catch(console.error);
};

export const readTicketSuccess = (ticket) => ({
  type: READ_TICKET,
  payload: ticket,
});

export const readTicket = (ticketId) => (dispatch, _getState) => {
  request
    .get(`${baseUrl}/ticket/${ticketId}`)
    .then((response) => {
      console.log('response ticket', response);
      const action = readTicketSuccess(response.body);
      console.log('ticket response', action);
      dispatch(action);
    })
    .catch(console.error);
};

export const updateTicketSuccess = (ticketId, ticket) => ({
  type: UPDATE_TICKET,
  payload: ticket,
  ticketId,
});

export const updateTicket = (ticket, ticketId) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.users.jwt;
  request
    .put(`${baseUrl}/ticket/${ticketId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(ticket)
    .then((response) => {
      const action = updateTicketSuccess(response.body);
      dispatch(action);
    })

    .catch(console.error);
};

export const deleteTicketSuccess = (ticketId) => {
  return {
    type: 'DELETE_TICKET',
    payload: ticketId,
  };
};

export const deleteTicket = (ticketId) => (dispatch, _getState) => {
  console.log('delete', ticketId);
  request
    .delete(`${baseUrl}/ticket/${ticketId}`)
    .then((response) => {
      console.log('deleteEvent response', response);
      dispatch(deleteTicketSuccess(response.body));
    })
    .catch(console.error);
};
