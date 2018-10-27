import React from 'react';
import Dashboard from 'components/dashboard/Dashboard';
import Settings from 'components/settings/Settings';
import Header from 'containers/header/container.header';
import { Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div onClick={() => { console.log('hah') }}>
        <Header />
        <Route exact path="/" component={Dashboard} />
        <Route path="/settings" component={Settings} />
      </div>
    );
  }
}
