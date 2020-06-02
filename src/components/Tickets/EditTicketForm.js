import React from 'react';
import { Link } from 'react-router-dom';

export default function EditTicketForm(props) {
  return (
    <div>
      <div>
        <form onSubmit={props.onSubmit}>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            placeholder="description"
            value={props.values.description}
            onChange={props.onChange}
          ></input>
          <label>Price:</label>
          <input
            type="string"
            name="price"
            placeholder="price"
            value={props.values.price}
            onChange={props.onChange}
          ></input>
          <button type="Submit">Edit ticket</button>
        </form>
      </div>
    </div>
  );
}
