import React from 'react';
import '../../App.css';
import { Form, Button, Col } from 'react-bootstrap';

export default function CommentForm(props) {
  console.log('comment form user', props);
  return (
    <div className="wrapper comment-form">
      <Form onSubmit={props.onSubmit}>
        <Form.Group controlId="">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Comment"
            onChange={props.onChange}
            value={props.value.comment}
            name="comment"
          />
        </Form.Group>
        <Button type="submit">Add</Button>
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
