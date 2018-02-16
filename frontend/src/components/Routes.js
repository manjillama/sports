import React from 'react';
import { Router, Route, Switch } from 'react-router';

import Home from './user/';
import Login from './auth/';

import * as routes from '../constants/routes';

import history from '../utils/routerHistory';

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path={routes.ROOT} component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path={routes.LOGIN} component={Login} />
      </Switch>
    </Router>
  );
};

export default Routes;
