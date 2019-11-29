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
  //   console.log("dispatch test");
  request
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(response => {
      // console.log("response", response);
      const action = loginSuccess(response.body);
      console.log(action, 'action');
      dispatch(action);
    })
    .catch(console.error);
};
