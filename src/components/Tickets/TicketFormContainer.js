import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketForm from './TicketForm';
import { createTicket } from '../../actions/tickets';

export class TicketFormContainer extends Component {
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
        />
      </div>
    );
  }
}

const mapDispatchToProps = { createTicket };

export default connect(null, mapDispatchToProps)(TicketFormContainer);
