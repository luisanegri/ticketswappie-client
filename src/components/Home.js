import React from 'react';
import '../App.css';
import Img from '../confettu.jpg';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-wrapper h-100">
      <Container
        fluid
        className="h-100"
        style={{ position: 'absolute', top: 0 }}
      >
        <Row className="h-100">
          <Col
            md={6}
            className="col-right"
            style={{
              backgroundColor: '#5215fc',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="row-home-btn">
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
              <Link to="/signup">
                <Button id="btn-red" className="home-btn">
                  Create Event
                </Button>
              </Link>

              <Link to="/event">
                <Button id="btn-green" className="home-btn">
                  View Events
                </Button>
              </Link>
            </div>
          </Col>
          <Col
            md={6}
            className="col-right"
            style={{
              backgroundColor: '#885fff',
              position: 'relative',
              backgroundImage: `url(${Img})`,
              backgroundSize: 'cover',
            }}
          ></Col>
        </Row>
      </Container>
    </div>
  );
}
