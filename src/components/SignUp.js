import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/signup';
import { Button, Form, Row, Container } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  state = { email: '', password: '', username: '' };

  // componentDidUpdate() {
  //   if (this.props.user.length !== 0) {
  //     this.props.history.push('/login');
  //   }
  // }

  onSubmit = event => {
    event.preventDefault();
    this.props.signup(
      this.state.username,
      this.state.email,
      this.state.password
    );
    this.setState({ email: '', password: '', username: '' });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Container>
        <div className="wrapper signup-wrapper">
          <h1>Welcome!</h1>
          <p>Before you can create an event, you have to register yourself.</p>
          <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Label>Username</Form.Label>
              <Form.Control
                onChange={this.onChange}
                value={this.state.username}
                name="username"
                placeholder="username"
              />
              <Form.Label>Email</Form.Label>
              <Form.Control
                onChange={this.onChange}
                value={this.state.email}
                name="email"
                placeholder="email"
              />
              <Form.Label>Password</Form.Label>

              <Form.Control
                onChange={this.onChange}
                value={this.state.password}
                name="password"
                placeholder="password"
                type="password"
              />
              <Button type="submit">Sign Up</Button>
            </Form.Row>
          </Form>
          <Link to="/login">Already have an account?</Link>
        </div>
      </Container>
    );
  }
}

const mapDispatchToProps = { signup };

export default connect(null, mapDispatchToProps)(SignUp);
