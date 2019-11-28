import React from 'react';
import '../../App.css';
import { Form, Button, Col } from 'react-bootstrap';

export default function CommentForm(props) {
  console.log('comment form ', props);
  return (
    <div className="wrapper comment-form">
      <h1>Create a comment</h1>
      <Form onSubmit={props.onSubmit}>
        <Form.Group controlId="">
          <Form.Label>Comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Comment"
            onChange={props.onChange}
            // value={props.value.comment}
            name="comment"
          />
        </Form.Group>
        <Button type="submit">Add</Button>
      </Form>
    </div>
  );
}
