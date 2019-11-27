import request from 'superagent';
export const CREATE_EVENT = 'CREATE_EVENT';
export const READ_EVENTS = 'READ_EVENTS';
export const READ_EVENT = 'READ_EVENT';

const baseUrl = 'http://localhost:4000';

function createEventSuccess(event) {
  return {
    type: CREATE_EVENT,
    payload: event
  };
}

export const createEvent = (name, description, image, start_date, end_date) => (
  dispatch,
  getState
) => {
  const state = getState();
  const jwt = state.user.jwt;
  request
    .post(`${baseUrl}/event`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ name, description, image, start_date, end_date })
    .then(response => {
      const action = createEventSuccess(response.text);
      dispatch(action);
    })
    .catch(console.error);
};

function readEventsSuccess(events) {
  return {
    type: READ_EVENT,
    payload: events
  };
}

export const readEvents = () => (dispatch, getState) => {
  const state = getState();
  console.log('get state', state);
  // const jwt = state.user.jwt;
  request
    .get(`${baseUrl}/event`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      const action = readEventsSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

export const readEventSuccess = event => ({
  type: READ_EVENT,
  payload: event
});

export const readEvent = (id, event) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.user.jwt;
  request
    .get(`${baseUrl}/event/${id}`)
    .set('Authorization', `Bearer ${jwt}`)
    .send(event)
    .then(response => {
      console.log('loadEvent response', response);
      dispatch(readEventSuccess(response.body));
    })
    .catch(console.error);
};
