import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventList from './EventList';
import { readEvent } from '../actions/events';

export class EventListContainer extends Component {
  componentDidMount() {
    this.props.readEvent();
  }

  render() {
    return (
      <div>
        <EventList events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = { readEvent };

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
