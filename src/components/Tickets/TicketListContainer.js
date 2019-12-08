import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketList from './TicketList';
import { readTickets, deleteTicket } from '../../actions/tickets';

export class TicketListContainer extends Component {
  componentDidMount() {
    this.props.readTickets(this.props.match.params.eventId);
  }

  render() {
    return (
      <div>
        <TicketList
          tickets={this.props.tickets}
          events={this.props.events}
          deleteTicket={this.props.deleteTicket}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tickets: state.tickets, events: state.events, user: state.users };
};

const mapDispatchToProps = {
  readTickets,
  deleteTicket
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketListContainer);
