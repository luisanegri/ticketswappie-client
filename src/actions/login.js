import request from 'superagent';
import { baseUrl } from './urls';

export const LOGIN = 'LOGIN';

function loginSuccess(user) {
  return {
    type: LOGIN,
    payload: user,
  };
}
export const login = (email, password) => (dispatch) => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then((response) => {
      const action = loginSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
