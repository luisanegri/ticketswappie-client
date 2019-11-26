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
        <EventList events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});

const mapDispatchToProps = { readEvents };

export default connect(mapStateToProps, mapDispatchToProps)(EventListContainer);
