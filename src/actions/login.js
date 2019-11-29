import request from 'superagent';
export const LOGIN = 'LOGIN';

const baseUrl = 'http://localhost:4000';

function loginSuccess(user) {
  console.log(user, 'user');
  return {
    type: LOGIN,
    payload: user
  };
}
export const login = (email, password) => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      const action = loginSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
