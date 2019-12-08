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
        <EventList
          events={this.props.events}
          user={this.props.user}
          tickets={this.props.tickets}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events,
    user: state.users,
    tickets: state.tickets
  };
};

const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
