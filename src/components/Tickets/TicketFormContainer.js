import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketForm from './TicketForm';
import { createTicket } from '../../actions/tickets';

export class TicketFormContainer extends Component {
  // componentDidMount() {
  //   this.props.createTicket(this.match.params.eventId);
  // }

  state = {
    price: '',
    description: '',
    image: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createTicket(
      this.state.price,
      this.state.description,
      this.state.image
    );
    this.setState({
      price: '',
      description: '',
      image: ''
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <TicketForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state}
          ticket={this.props.ticket}
          event={this.props.event}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, 'ticket form state');
  return {
    ticket: state.tickets,
    event: state.events
  };
};

const mapDispatchToProps = { createTicket };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketFormContainer);
