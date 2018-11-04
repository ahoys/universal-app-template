import React from 'react';
import Header from 'components/header/Header';
import Dashboard from 'components/dashboard/Dashboard';
import Settings from 'components/settings/Settings';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from 'components/App.scss';
import { Switch, Route } from 'react-router';

/**
 * The main React-application starts from here.
 */
const App = () => (
  <div className="app">
    <Header />
    <Switch>
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/settings" component={Settings} />
    </Switch>
  </div>
);

export default withStyles(style)(App);
