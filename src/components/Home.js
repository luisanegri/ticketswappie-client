import React from 'react';
import '../App.css';
import Img from '../landing.svg';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home-wrapper h-100">
      <Container fluid className="h-100">
        <Row className="h-100">
          <Col
            md={6}
            className="col-right"
            style={{
              // backgroundColor: '#5215fc',
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div className="row-home-btn">
              <h5>Make your event and sell tickets</h5>
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti
              </p>
              <Link to="/signup">
                <Button
                  className="home-btn"
                  style={{
                    background: 'white',
                    border: ' 1px solid #4ee0af',
                    color: '#4ee0af',
                  }}
                >
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
          >
            <img src={Img} className="landing-image" alt="Landing Illustration" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
