import request from 'superagent';
export const LOGIN = 'LOGIN';

const baseUrl = 'http://localhost:4000';

function loginSuccess(user) {
  return {
    type: LOGIN,
    payload: user.jwt
  };
}
export const login = (email, password) => dispatch => {
  //   console.log("dispatch test");
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      // console.log("response", response);
      const action = loginSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
