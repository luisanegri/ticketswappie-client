import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../actions/events';
import EventForm from './EventForm';

export class EventFormContainer extends Component {
  state = {
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    image: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createEvent(
      this.state.name,
      this.state.description,
      this.state.end_date,
      this.state.start_date,
      this.state.image
    );
    this.setState({
      name: '',
      description: '',
      start_date: '',
      end_date: '',
      image: ''
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <EventForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state}
        />
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   events: state.events
// });

const mapDispatchToProps = { createEvent };

export default connect(null, mapDispatchToProps)(EventFormContainer);
