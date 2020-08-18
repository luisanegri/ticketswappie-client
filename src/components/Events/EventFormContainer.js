import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/events';
import EventForm from './EventForm';

export class EventFormContainer extends Component {
  state = {
    name: '',
    description: '',
    start_date: '',
    image: '',
    location: '',
    price: '',
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.createEvent(
      this.state.name,
      this.state.description,
      this.state.start_date,
      this.state.image,
      this.state.location,
      this.state.price
    );
    this.setState({
      name: '',
      description: '',
      start_date: '',
      image: '',
      location: '',
      price: '',
    });
    // this.props.history.push('/event');
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <EventForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state}
          user={this.state.user}
          success={this.props.success}
          error={this.props.error}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('state', state);
  return {
    user: state.users,
    success: state.events.success,
    error: state.events.errorOnCreate,
  };
};
const mapDispatchToProps = { createEvent };

export default connect(mapStateToProps, mapDispatchToProps)(EventFormContainer);
