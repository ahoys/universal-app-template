import React from 'react';
import Content from 'components/content/Content';
import Navigator from 'components/navigator/Navigator';
import View from 'components/view/View';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from 'components/App.scss';
import universal from 'react-universal-component';
import { Switch, Route, Link } from 'react-router-dom';

const UniversalHeader = universal(import('components/header/Header'));
const UniversalFooter = universal(import('components/footer/Footer'));
const UniversalDashboard = universal(import('components/dashboard/Dashboard'));
const UniversalSettings = universal(import('components/settings/Settings'));

/**
 * The main React-application starts from here.
 */
const App = () => (
  <div className="App">
    <UniversalHeader />
    <Content>
      <Navigator>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Go to dashboard</Link>
        <Link to="/settings">Go to settings</Link>
      </Navigator>
      <View>
        <Switch>
          <Route exact path="/dashboard" component={UniversalDashboard} />
          <Route exact path="/settings" component={UniversalSettings} />
        </Switch>
      </View>
    </Content>
    <UniversalFooter />
  </div>
);

export default withStyles(style)(App);
