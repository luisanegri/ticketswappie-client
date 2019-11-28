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
    const id = this.props.match.params.ticketId;
    console.log('readTicket id params', id);
    // cool getting the id
    this.props.readTicket(this.props.match.params.ticketId);
  }

  render() {
    return (
      <div>
        <TicketDetail ticket={this.props.ticket} />
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
  // empty
  console.log('read ticker detail state', state);
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
