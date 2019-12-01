import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

export default function NavBar() {
  return (
    <div className="navigation">
      <Navbar collapseOnSelect expand="lg" className="bg" variant="dark">
        <Link to="/">
          <Navbar.Brand>TicketSwap</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Link to="/event">Events</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/event/create">Create Event</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
