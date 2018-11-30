// @flow
import * as React from 'react';
import Header from 'components/header/Header';
import Content from 'components/content/Content';
import Navigator from 'components/navigator/Navigator';
import View from 'components/view/View';
import Footer from 'components/footer/Footer';
import universal from 'react-universal-component';
import theme from './globalTheme';
import styled, { ThemeProvider } from 'styled-components';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Dynamically loaded sub-components.
const UniversalLogin = universal(import('components/login/Login'));
const UniversalDashboard = universal(import('components/dashboard/Dashboard'));
const UniversalSettings = universal(import('components/settings/Settings'));

type Props = {
  inSession: boolean,
  location: string,
}

const Style = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.body.background};
`;

/**
 * The main React-application starts from here.
 */
const App = (props: Props) => (
  <ThemeProvider theme={theme}>
    <Style>
      <Header />
      <Content>
        <Navigator>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Go to dashboard</Link>
          <Link to="/settings">Go to settings</Link>
          { props.inSession ? null : <Link to="/login">Login</Link> }
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
    </Style>
  </ThemeProvider>
);

const mapStateToProps = (state) => ({
  inSession: state.getIn(['session', 'inSession']),
});

export default withRouter(connect(
  mapStateToProps,
)(App));
