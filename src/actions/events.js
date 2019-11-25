import request from 'superagent';
export const CREATE_EVENT = 'CREATE_EVENT';
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

function readEventSuccess(event) {
  return {
    type: READ_EVENT,
    payload: event
  };
}

export const readEvent = () => dispatch => {
  request
    .get(`${baseUrl}/event`)
    .then(response => {
      const action = readEventSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
