import request from 'superagent';
export const LOGIN = 'LOGIN';

const baseUrl = 'http://localhost:4000';

function loginSuccess(user) {
  return {
    type: LOGIN,
    payload: user
  };
}

export const signup = (username, email, password) => dispatch => {
  //   console.log("dispatch test");
  request
    .post(`${baseUrl}/user`)
    .send({ username, email, password })
    .then(response => {
      //   console.log(response.text);
      const action = loginSuccess(response.text);
      dispatch(action);
    })
    .catch(console.error);
};
