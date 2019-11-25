import React, { Fragment } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import EventFormContainer from './components/EventFormContainer';
import EventListContainer from './components/EventListContainer';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Fragment>
      <Container>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/event/create" component={EventFormContainer} />
        <Route exact path="/event" component={EventListContainer} />
      </Container>
    </Fragment>
  );
}

export default App;
