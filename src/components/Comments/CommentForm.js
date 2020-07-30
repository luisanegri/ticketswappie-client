import React from 'react';
import '../../App.css';
import { Form, Button } from 'react-bootstrap';

export default function CommentForm(props) {
  return (
    <div className="wrapper comment-form">
      <Form onSubmit={props.onSubmit}>
        <Form.Group controlId="">
          <Form.Control
            type="text"
            placeholder="Comment"
            onChange={props.onChange}
            value={props.value.comment}
            name="comment"
          />
        </Form.Group>

        <Button type="submit" id="btn-green">
          <i class="fa fa-paper-plane"></i>
        </Button>
      </Form>

      {props.comments.map((comment) => (
        <div key={comment.id} className="comment-block">
          <span>{comment.username}: </span>
          <span>{comment.comment}</span>
        </div>
      ))}
    </div>
  );
}
