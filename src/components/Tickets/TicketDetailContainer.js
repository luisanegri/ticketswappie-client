import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketDetail from './TicketDetail';
import CommentForm from '../Comments/CommentForm';
import { readTicket } from '../../actions/tickets';
import { createComment } from '../../actions/comments';

export class TicketDetailContainer extends Component {
  state = {
    comment: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createComment(
      this.state.comment,
      this.props.match.params.ticketId
    );
    this.setState({
      comment: ''
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  componentDidMount() {
    this.props.readTicket(this.props.match.params.ticketId);
  }

  render() {
    return (
      <div>
        <TicketDetail
          ticket={this.props.ticket}
          comments={this.props.comments}
        />
        <CommentForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state}
          comments={this.props.comments}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ticket: state.tickets,
    comments: state.comments,
    user: state.users
  };
};

const mapDispatchToProps = { readTicket, createComment };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailContainer);
