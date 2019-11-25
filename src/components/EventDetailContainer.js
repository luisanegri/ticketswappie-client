import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDetail from './EventDetail';
import { readEvent } from '../actions/events';

export class EventDetailContainer extends Component {
  componentDidMount() {
    this.props.readEvent(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <EventDetail event={this.props.event} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  event: state.events
});

const mapDispatchToProps = { readEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailContainer);
