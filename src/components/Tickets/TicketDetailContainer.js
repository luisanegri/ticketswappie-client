import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketDetail from './TicketDetail';
import { readTicket } from '../../actions/tickets';

export class TicketDetailContainer extends Component {
  componentDidMount() {
    this.props.readTicket(this.props.match.params.ticketId);
  }
  render() {
    return (
      <div>
        <TicketDetail ticket={this.props.ticket} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ticket: state.tickets
});

const mapDispatchToProps = { readTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailContainer);
