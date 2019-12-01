import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import { Button, Form, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  state = { email: '', password: '' };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password);
    this.setState({ email: '', password: '' });
  };

  componentDidUpdate() {
    const { user } = this.props;

    if (user) {
      this.props.history.push('/event');
    }
  }

  render() {
    // if (this.props.user) return <Redirect to="/event" />;
    return (
      <Container>
        <div className="wrapper signup-wrapper">
          <Form onSubmit={this.onSubmit}>
            <h1>Login</h1>
            <Form.Row>
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

              <Button type="submit">Login</Button>
            </Form.Row>
          </Form>
        </div>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
