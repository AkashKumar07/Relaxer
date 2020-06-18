import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import asyncComponent from './hoc/asyncComponent/asyncComponent'

import './App.css';

// import Relaxer from './containers/Relaxer/Relaxer';
import Landing from './containers/Landing/Landing';

const asyncRelaxer = asyncComponent(() => {
  return import('./containers/Relaxer/Relaxer');
});

function App() {
  return (
      <Switch>
        <Route path="/" exact component={Landing}/>
        <Route path="/relaxer" exact component={asyncRelaxer}/>
        <Redirect to="/"/>
      </Switch>
  );
}

export default withRouter(App);
