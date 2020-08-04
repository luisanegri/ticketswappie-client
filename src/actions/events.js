import request from 'superagent';
import { baseUrl } from './urls';

export const CREATE_EVENT = 'CREATE_EVENT';
export const READ_EVENTS_STARTED = 'READ_EVENTS_STARTED';
export const READ_EVENTS_SUCCESS = 'READ_EVENTS_SUCCESS';
export const READ_EVENTS_FAILURE = 'READ_EVENTS_FAILURE';

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

const readEventsStarted = () => ({
  type: READ_EVENTS_STARTED,
});

const readEventsSuccess = (events) => {
  console.log('events on action readSuccess', events);
  return {
    type: READ_EVENTS_SUCCESS,
    payload: events,
  };
};

console.log('read', readEventsSuccess());

const readEventsFailure = (error) => ({
  type: READ_EVENTS_FAILURE,
  payload: error,
});

export const readEvents = () => (dispatch, getState) => {
  dispatch(readEventsStarted());
  console.log('get', getState());

  request
    .get(`${baseUrl}/event`)
    .then((response) => {
      dispatch(readEventsSuccess(response.body));
      console.log('action', readEventsSuccess(response.body));
    })
    .catch((err) => {
      dispatch(readEventsFailure(err));
    });
};
