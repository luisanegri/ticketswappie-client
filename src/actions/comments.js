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

export const createComment = (comment, ticketId) => dispatch => {
  console.log('ticketId', ticketId);
  console.log('comment', comment);
  request
    .post(`${baseUrl}/ticket/${ticketId}/comment`)
    .send({ comment })
    .then(response => {
      const action = createCommentSuccess(response.text);
      console.log('action', action);
      dispatch(action);
    })
    .catch(console.error);
};