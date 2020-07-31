import request from 'superagent';
import { baseUrl } from './urls';

export const LOGIN = 'LOGIN';

function loginSuccess(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}

export const signup = (username, email, password) => (dispatch) => {
  request
    .post(`${baseUrl}/user`)
    .send({ username, email, password })
    .then((response) => {
      const action = loginSuccess(response.text);
      dispatch(action);
    })
    .catch(console.error);
};
