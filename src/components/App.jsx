import React from 'react';
import Header from 'components/header/Header';
import Content from 'components/content/Content';
import Navigator from 'components/navigator/Navigator';
import View from 'components/view/View';
import Footer from 'components/footer/Footer';
import Dashboard from 'components/dashboard/Dashboard';
import Settings from 'components/settings/Settings';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from 'components/App.scss';
import { Switch, Route, Link } from 'react-router-dom';

/**
 * The main React-application starts from here.
 */
const App = () => (
  <div className="App">
    <Header />
    <Content>
      <Navigator>
        <Link to="/dashboard">Go to dashboard</Link>
        <Link to="/settings">Go to settings</Link>
      </Navigator>
      <View>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </View>
    </Content>
    <Footer />
  </div>
);

export default withStyles(style)(App);
