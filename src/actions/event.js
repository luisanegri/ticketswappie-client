import request from 'superagent';
import { baseUrl } from './urls';

export const READ_EVENT = 'READ_EVENT';

export const readEventSuccess = (event) => {
  console.log('pay', event);
  return {
    type: READ_EVENT,
    payload: event,
  };
};

export const readEvent = (id, event) => (dispatch, _getState) => {
  request
    .get(`${baseUrl}/event/${id}`)
    .send(event)
    .then((response) => {
      console.log('res', response);
      dispatch(readEventSuccess(response.body));
      console.log('log', readEventSuccess(response.body));
    })
    .catch(console.error);
};
