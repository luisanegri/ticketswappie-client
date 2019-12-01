import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventList from './EventList';
import { readEvents } from '../../actions/events';

export class EventListContainer extends Component {
  componentDidMount() {
    this.props.readEvents();
  }

  render() {
    return (
      <div>
        <EventList events={this.props.events} user={this.props.user} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('event list container state', state);
  return {
    events: state.events,
    user: state.users
  };
};

const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
