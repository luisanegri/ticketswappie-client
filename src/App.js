import React, { Fragment } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import EventFormContainer from './components/EventFormContainer';
import EventListContainer from './components/EventListContainer';
import EventDetailContainer from './components/EventDetailContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/event/create" component={EventFormContainer} />
        <Route exact path="/event" component={EventListContainer} />
        <Route exact path="/event/:id" component={EventDetailContainer} />
      </Container>
    </Fragment>
  );
}

export default App;
