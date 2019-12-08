import request from 'superagent';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const READ_COMMENTS = 'READ_COMMENTS';

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

function readCommentsSuccess(comment) {
  return {
    type: READ_COMMENTS,
    payload: comment
  };
}

export const readComments = ticketId => (dispatch, _getState) => {
  request
    .get(`${baseUrl}/${ticketId}/comment`)
    .then(response => {
      const action = readCommentsSuccess(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
