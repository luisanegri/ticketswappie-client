import request from 'superagent';
export const CREATE_COMMENT = 'CREATE_COMMENT';

const baseUrl = 'http://localhost:4000';

function createCommentSuccess(comment) {
  return {
    type: CREATE_COMMENT,
    payload: comment
  };
}

export const createComment = (comment, ticketId) => dispatch => {
  request
    .post(`${baseUrl}/ticket/${ticketId}/comment`)
    .send({ comment })
    .then(response => {
      const action = createCommentSuccess(response.text);
      dispatch(action);
    })
    .catch(console.error);
};
