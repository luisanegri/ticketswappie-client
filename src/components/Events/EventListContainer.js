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
          loading={this.props.loading}
          events={this.props.events}
          error={this.props.error}
          tickets={this.props.tickets}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    events: state.events.eventsList,
    loading: state.events.loading,
    error: state.events.error,
    user: state.users,
    tickets: state.tickets,
  };
};

const mapDispatchToProps = (dispatch) => ({
  readEvents: (events) => dispatch(readEvents(events)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
