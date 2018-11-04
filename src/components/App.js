import React from 'react';
import Header from 'components/header/Header';
import Dashboard from 'components/dashboard/Dashboard';
import Settings from 'components/settings/Settings';
import { Switch, Route } from 'react-router';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </div>
    );
  }
}
