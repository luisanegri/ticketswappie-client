import React, { Fragment } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={SignUp} />
      <Route exact path="/login" component={Login} />
    </Fragment>
  );
}

export default App;
