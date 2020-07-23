import React, { Component } from 'react';
import { connect } from 'react-redux';
import TicketDetail from './TicketDetail';
import CommentForm from '../Comments/CommentForm';
import { readTicket } from '../../actions/tickets';
import { createComment, readComments } from '../../actions/comments';
import { Container } from 'react-bootstrap';

export class TicketDetailContainer extends Component {
  state = {
    comment: '',
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.createComment(
      this.state.comment,
      this.props.match.params.ticketId
    );
    this.setState({
      comment: '',
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidMount() {
    this.props.readTicket(this.props.match.params.ticketId);
    this.props.readComments(this.props.match.params.ticketId);
  }

  render() {
    return (
      <div>
        <Container>
          <TicketDetail
            ticket={this.props.ticket}
            comments={this.props.comments}
            event={this.props.event}
          />
          {/* {this.props.user.id === this.props.ticket.userId && (
            <EditTicketContainer
              ticket={this.props.ticket}
              ticketId={this.props.match.params.ticketId}
            />
          )} */}

          <CommentForm
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            value={this.state}
            comments={this.props.comments}
            user={this.props.user}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ticket: state.tickets,
    comments: state.comments,
    user: state.users,
    event: state.events,
  };
};

const mapDispatchToProps = { readTicket, createComment, readComments };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketDetailContainer);
