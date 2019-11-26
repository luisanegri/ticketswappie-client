import request from 'superagent';
export const READ_TICKETS = 'READ_TICKETS';

const baseUrl = 'http://localhost:4000';

function readTicketsSuccess(tickets) {
  return {
    type: READ_TICKETS,
    payload: tickets
  };
}

export const readTickets = () => dispatch => {
  request
    .get(`${baseUrl}/ticket`)
    .then(response => {
      const action = readTicketsSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
