import React from 'react';
import '../App.css';
import Img from '../group-of-people-raising-their-hands-2078076.jpg';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-wrapper">
      <section class="hero" style={{ backgroundImage: `url(${Img})` }}>
        <Container>
          <Row>
            <div class="hero-inner">
              <h2>THE EASIEST WAY TO SELL TICKETS FOR YOUR EVENTS </h2>
              <br></br>
              <h2> THE MOST SECURE WAY TO BUY TICKETS</h2>
            </div>
          </Row>
          <Row className="row-home-btn">
            <Col>
              <Link to="/signup">
                <Button className="btn-grad">Create Event</Button>
              </Link>
            </Col>
            <Col>
              <Link to="/event">
                <Button className="btn-grad">Events</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
