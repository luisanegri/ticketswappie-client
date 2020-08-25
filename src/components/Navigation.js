import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../actions/login';

import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = ({ user }) => {
  console.log('user', user);
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" className="bg" variant="dark">
        <Link to="/">
          <Navbar.Brand>TicketSwappie</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            {user ? (
              <React.Fragment>
                <Nav.Link>
                  <Link to="/event">Events</Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="/event/create">Create Event</Link>
                </Nav.Link>
                <Nav.Link>
                  <button onClick={() => logout()}>Sign Out</button>
                </Nav.Link>
              </React.Fragment>
            ) : (
              <Nav.Link>
                <Link to="/signup">Sign up</Link>
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.users,
});

const mapDispatchToProps = { logout };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
