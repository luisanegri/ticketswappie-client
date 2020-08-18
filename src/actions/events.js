import request from 'superagent';
import { baseUrl } from './urls';

export const CREATE_EVENT_STARTED = 'CREATE_EVENT_STARTED';
export const CREATE_EVENT_SUCCESS = 'CREATE_EVENT_SUCCESS';
export const CREATE_EVENT_FAILURE = 'CREATE_EVENT_FAILURE';

export const READ_EVENTS_STARTED = 'READ_EVENTS_STARTED';
export const READ_EVENTS_SUCCESS = 'READ_EVENTS_SUCCESS';
export const READ_EVENTS_FAILURE = 'READ_EVENTS_FAILURE';

const createEventStarted = () => ({
  type: CREATE_EVENT_STARTED,
});

function createEventSuccess(event) {
  return {
    type: CREATE_EVENT_SUCCESS,
    payload: event,
  };
}

const createEventFailure = (errorOnCreate) => {
  console.log('error action', errorOnCreate);
  return {
    type: CREATE_EVENT_FAILURE,
    payload: errorOnCreate,
  };
};

export const createEvent = (
  name,
  description,
  image,
  start_date,
  location,
  price
) => (dispatch, getState) => {
  dispatch(createEventStarted());

  const state = getState();
  const jwt = state.users.jwt;
  const userId = state.users.id;

  request
    .post(`${baseUrl}/event`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ name, description, image, start_date, location, price, userId })
    .then((response) => {
      dispatch(createEventSuccess(response.body));
    })
    .catch((err) => {
      dispatch(createEventFailure(err));
    });
};

const readEventsStarted = () => ({
  type: READ_EVENTS_STARTED,
});

const readEventsSuccess = (events) => {
  return {
    type: READ_EVENTS_SUCCESS,
    payload: events,
  };
};

const readEventsFailure = (error) => ({
  type: READ_EVENTS_FAILURE,
  payload: error,
});

export const readEvents = () => (dispatch, _getState) => {
  dispatch(readEventsStarted());

  request
    .get(`${baseUrl}/event`)
    .then((response) => {
      dispatch(readEventsSuccess(response.body));
    })
    .catch((err) => {
      dispatch(readEventsFailure(err));
    });
};
