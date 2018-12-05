// @flow
import * as React from 'react';
import Header from 'components/header/Header';
import Content from 'components/content/Content';
import Navigator from 'components/navigator/Navigator';
import View from 'components/view/View';
import Footer from 'components/footer/Footer';
import universal, { type UniversalType } from 'react-universal-component';
import commonThemes from './commonThemes';
import styled, { ThemeProvider, type StyledType } from 'styled-components';
import { Switch, Route, Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

// Dynamically loaded sub-components.
const UniversalLogin: UniversalType = universal(
  import('components/login/Login')
);
const UniversalDashboard: UniversalType = universal(
  import('components/dashboard/Dashboard')
);
const UniversalSettings: UniversalType = universal(
  import('components/settings/Settings')
);

type Props = {
  inSession: boolean,
  location: string,
};

const Style: Function = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${commonThemes.body.background};
`;

/**
 * The main React-application starts from here.
 */
export const App: React.StatelessFunctionalComponent<Props> = ({
  inSession,
  location,
}) => (
  <ThemeProvider theme={commonThemes}>
    <Style>
      <Header />
      <Content>
        <Navigator>
          <Link to="/">Home</Link>
          <Link to="/dashboard">Go to dashboard</Link>
          <Link to="/settings">Go to settings</Link>
          {inSession ? null : <Link to="/login">Login</Link>}
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

type State = {
  inSession: boolean,
};

const mapStateToProps = (state: Function): State => ({
  inSession: state.getIn(['session', 'inSession']),
});

export default withRouter(connect(mapStateToProps)(App));
