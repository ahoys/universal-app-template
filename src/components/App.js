import React from 'react';
import Dashboard from 'components/dashboard/Dashboard';
import Header from 'components/header/Header';
import { Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <div onClick={() => { console.log('hah') }}>
        <Header />
        <Route exact path="/" component={Dashboard} />
      </div>
    );
  }
}
