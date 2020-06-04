import React, { Component } from 'react';
import EditTicketForm from './EditTicketForm';
import { connect } from 'react-redux';
import { updateTicket } from '../../actions/tickets';
import TicketModal from './TicketModal';

class EditTicketContainer extends Component {
  state = {
    description: this.props.ticket.description,
    price: this.props.ticket.price,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.updateTicket(this.state, this.props.ticketId);
    this.setState({
      description: '',
      price: '',
    });
  };

  render() {
    return (
      <div>
        {/* <TicketModal
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        /> */}

        <EditTicketForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          values={this.state}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ticket: state.tickets,
});

export default connect(mapStateToProps, { updateTicket })(EditTicketContainer);
