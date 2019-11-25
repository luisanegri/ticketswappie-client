import React from 'react';
import { Col } from 'react-bootstrap';

export default function EventDetail(props) {
  console.log(props);
  return (
    <div className="wrapper event-detail">
      <Col>
        {/* not displaying on page*/}
        <span>{props.name}</span>
      </Col>
    </div>
  );
}
