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

export const createEvent = (
  name,
  description,
  image,
  start_date,
  end_date
) => dispatch => {
  request
    .post(`${baseUrl}/event`)
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

export const readEvents = () => dispatch => {
  request
    .get(`${baseUrl}/event`)
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

export const readEvent = (id, event) => dispatch => {
  console.log('loadEvent id', id);
  request
    .get(`${baseUrl}/event/${id}`)
    .send(event)
    .then(response => {
      console.log('loadEvent response', response);
      dispatch(readEventSuccess(response.body));
    })
    .catch(console.error);
};
