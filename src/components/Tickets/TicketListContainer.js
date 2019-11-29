import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketList from './TicketList';
import { readTickets } from '../../actions/tickets';

export class TicketListContainer extends Component {
  componentDidMount() {
    this.props.readTickets(this.props.match.params.eventId);
  }

  render() {
    return (
      <div>
        <TicketList tickets={this.props.tickets} events={this.props.events} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('tickets state', state);
  return { tickets: state.tickets, events: state.events };
};

const mapDispatchToProps = {
  readTickets
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListContainer);
