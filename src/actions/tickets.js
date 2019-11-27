import request from 'superagent';
export const READ_TICKETS = 'READ_TICKETS';
export const READ_TICKET = 'READ_TICKET';
export const CREATE_TICKET = 'CREATE_TICKET';
export const UPDATE_TICKET = 'UPDATE_TICKET';

const baseUrl = 'http://localhost:4000';

function createTicketSuccess(ticket, eventId) {
  return {
    type: CREATE_TICKET,
    payload: ticket,
    eventId
  };
}

export const createTicket = (price, description, image, eventId) => (
  dispatch,
  getState
) => {
  const state = getState();
  const jwt = state.user.jwt;
  request
    .post(`${baseUrl}/event/${eventId}/ticket`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ price, description, image })
    .then(response => {
      const action = createTicketSuccess(response.body);
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

export const readTickets = eventId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.user.jwt;
  request
    .get(`${baseUrl}/event/${eventId}/ticket`)
    .set('Authorization', `Bearer ${jwt}`)
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

export const readTicket = ticketId => (dispatch, getState) => {
  const state = getState();
  const jwt = state.user.jwt;
  request
    .get(`${baseUrl}/ticket/${ticketId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      const action = readTicketSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const updateTicketSuccess = (ticketId, ticket) => ({
  type: UPDATE_TICKET,
  payload: ticket,
  ticketId
});

export const updateTicket = (ticketId, ticket) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.user.jwt;
  request
    .patch(`${baseUrl}/ticket/${ticketId}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(ticket)
    .then(response => {
      const action = updateTicketSuccess(response.body);
      dispatch(action);
    })

    .catch(console.error);
};
