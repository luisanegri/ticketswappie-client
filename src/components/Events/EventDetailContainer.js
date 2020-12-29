import React, { Component } from 'react';
import { connect } from 'react-redux';
import EventDetail from './EventDetail';
import { readEvent } from '../../actions/event';

export class EventDetailContainer extends Component {
  componentDidMount() {
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

const mapStateToProps = (state) => {
  return { event: state.event, tickets: state.tickets };
};

const mapDispatchToProps = { readEvent };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventDetailContainer);
