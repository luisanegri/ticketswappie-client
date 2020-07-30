import request from 'superagent';
export const CREATE_EVENT = 'CREATE_EVENT';
export const READ_EVENTS = 'READ_EVENTS';
export const READ_EVENT = 'READ_EVENT';

const baseUrl = 'http://localhost:4001';

function createEventSuccess(event) {
  return {
    type: CREATE_EVENT,
    payload: event,
  };
}

export const createEvent = (
  name,
  description,
  image,
  start_date,
  location,
  price
) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.users.jwt;
  const userId = state.users.id;

  request
    .post(`${baseUrl}/event`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ name, description, image, start_date, location, price, userId })
    .then((response) => {
      const action = createEventSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

function readEventsSuccess(events) {
  return {
    type: READ_EVENT,
    payload: events,
  };
}

export const readEvents = () => (dispatch, _getState) => {
  request
    .get(`${baseUrl}/event`)
    .then((response) => {
      const action = readEventsSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const readEventSuccess = (event) => ({
  type: READ_EVENT,
  payload: event,
});

export const readEvent = (id, event) => (dispatch, _getState) => {
  request
    .get(`${baseUrl}/event/${id}`)
    .send(event)
    .then((response) => {
      dispatch(readEventSuccess(response.body));
    })
    .catch(console.error);
};
