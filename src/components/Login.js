import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/login';
import { Button, Form, Col } from 'react-bootstrap';
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
      <div>
        <Form onSubmit={this.onSubmit}>
          <Form.Label>Login</Form.Label>
          <Form.Row>
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
              <Button type="submit">Login</Button>
            </Col>
          </Form.Row>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
