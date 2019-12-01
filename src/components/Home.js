import React from 'react';
import '../App.css';
import Img from '../people-in-concert-1763075.jpg';
import { Container, Row, Button } from 'react-bootstrap';
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
          <div className="row-home-btn">
            <Link to="/signup">
              <Button className="btn-grad">Create Event</Button>
            </Link>

            <Link to="/event">
              <Button className="btn-grad">Events</Button>
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
