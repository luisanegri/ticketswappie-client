import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../actions/signup';
import { Button, Form, Col } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  state = { email: '', password: '', username: '' };

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
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Label>Sign up</Form.Label>
          <Form.Row>
            <Col>
              <Form.Control
                onChange={this.onChange}
                value={this.state.username}
                name="username"
                placeholder="username"
              />
            </Col>
            <Col>
              <Form.Control
                onChange={this.onChange}
                value={this.state.email}
                name="email"
                placeholder="email"
              />
            </Col>
            <Col>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.password}
                  name="password"
                  placeholder="password"
                  type="password"
                />
              </Form.Group>
            </Col>
            <Col>
              <Button type="submit">Sign Up</Button>
            </Col>
          </Form.Row>
        </Form>
        <Link to="/login">Already have an account?</Link>
      </div>
    );
  }
}

const mapDispatchToProps = { signup };

export default connect(null, mapDispatchToProps)(SignUp);
