import request from 'superagent';
export const CREATE_COMMENT = 'CREATE_COMMENT';

const baseUrl = 'http://localhost:4000';

function createCommentSuccess(comment, ticketId) {
  return {
    type: CREATE_COMMENT,
    payload: ticketId,
    comment
  };
}

export const createComment = (comment, ticketId) => (dispatch, getState) => {
  const state = getState();
  const jwt = state.users;
  console.log('ticketId', ticketId);
  console.log('comment', comment);
  request
    .post(`${baseUrl}/ticket/${ticketId}/comment`)
    .set('Authorization', `Bearer ${jwt}`)
    .send({ comment })
    .then(response => {
      const action = createCommentSuccess(response.text);
      console.log('action', action);
      dispatch(action);
    })
    .catch(console.error);
};
