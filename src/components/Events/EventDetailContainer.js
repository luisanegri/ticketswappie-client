import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDetail from './EventDetail';
import { readEvent } from '../../actions/events';

export class EventDetailContainer extends Component {
  componentDidMount() {
    // or eventId or id
    const id = this.props.match.params.eventId;
    console.log('event detail id?', id);
    this.props.readEvent(this.props.match.params.id);
  }
  render() {
    return (
      <div>
        <EventDetail event={this.props.event} tickets={this.props.tickets} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('event detail state', state);
  return { event: state.events, tickets: state.tickets };
};

const mapDispatchToProps = { readEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailContainer);
