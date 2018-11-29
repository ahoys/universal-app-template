import React from 'react';
import Header from 'components/header/Header';
import Content from 'components/content/Content';
import Navigator from 'components/navigator/Navigator';
import View from 'components/view/View';
import Footer from 'components/footer/Footer';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from 'components/App.scss';
import universal from 'react-universal-component';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const UniversalLogin = universal(import('components/login/Login'));
const UniversalDashboard = universal(import('components/dashboard/Dashboard'));
const UniversalSettings = universal(import('components/settings/Settings'));

/**
 * The main React-application starts from here.
 */
const App = ({ inSession, location }) => (
  <div className="App">
    <Header />
    <Content>
      <Navigator>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Go to dashboard</Link>
        <Link to="/settings">Go to settings</Link>
        { inSession ? null : <Link to="/login">Login</Link> }
      </Navigator>
      <View location={location}>
        <Switch>
          <Route exact path="/dashboard" component={UniversalDashboard} />
          <Route exact path="/settings" component={UniversalSettings} />
          <Route exact path="/login" component={UniversalLogin} />
        </Switch>
      </View>
    </Content>
    <Footer />
  </div>
);

const mapStateToProps = (state) => ({
  inSession: state.getIn(['session', 'inSession']),
});

export default withRouter(connect(
  mapStateToProps,
)(withStyles(style)(App)));
