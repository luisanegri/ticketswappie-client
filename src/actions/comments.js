import request from 'superagent';
export const CREATE_COMMENT = 'CREATE_COMMENT';

const baseUrl = 'http://localhost:4000';

function createCommentSuccess(comment, ticketId) {
  return {
    type: CREATE_COMMENT,
    payload: comment,
    ticketId
  };
}

export const createComment = (comment, ticketId) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.users.jwt;
  // get user id and send to back
  const userId = state.users.id;
  const username = state.users.username;
  request
    .post(`${baseUrl}/ticket/${ticketId}/comment`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ comment, userId, username })
    .then(response => {
      const action = createCommentSuccess(response.body);
      console.log('action', action);
      dispatch(action);
    })
    .catch(console.error);
};
