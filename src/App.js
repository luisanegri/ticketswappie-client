import React, { Fragment } from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Navigation from './components/Navigation';
import EventFormContainer from './components/Events/EventFormContainer';
import EventListContainer from './components/Events/EventListContainer';
import EventDetailContainer from './components/Events/EventDetailContainer';
import TicketListContainer from './components/Tickets/TicketListContainer';
import TicketFormContainer from './components/Tickets/TicketFormContainer';
import TicketDetailContainer from './components/Tickets/TicketDetailContainer';
import Home from './components/Home';

function App() {
  return (
    <Fragment>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/event/create" component={EventFormContainer} />
        <Route exact path="/event" component={EventListContainer} />
        <Route exact path="/event/:id" component={EventDetailContainer} />
        <Route
          exact
          path="/event/:eventId/ticket"
          component={TicketListContainer}
        />
        <Route
          exact
          path="/ticket/:ticketId"
          component={TicketDetailContainer}
        />
        <Route
          exact
          path="/event/:eventId/ticket/create"
          component={TicketFormContainer}
        />
      </Switch>
    </Fragment>
  );
}

export default App;
