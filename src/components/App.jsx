// @flow
import * as React from 'react';
import TitleLayout from 'components/layout/title/TitleLayout';
import ToolsLayout from 'components/layout/tools/ToolsLayout';
import ContentLayout from 'components/layout/content/ContentLayout';
import FooterLayout from 'components/layout/footer/FooterLayout';
import Navigator from 'components/navigator/Navigator';
import TitleButton from 'components/buttons/TitleButton';
import ToolButton from 'components/buttons/ToolButton';
import NavigatorButton from 'components/buttons/NavigatorButton';
import View from 'components/view/View';
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

const StyledApp: Function = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  background: ${commonThemes.body.background};
  font-family: Arial, Helvetica, sans-serif;
  .content-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 64px;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

export const App: React.StatelessFunctionalComponent<Props> = ({
  inSession,
  location,
}) => (
  <ThemeProvider theme={commonThemes}>
    <StyledApp>
      <TitleLayout>
        <h1>UNIVERSAL</h1>
        {inSession ? (
          <TitleButton icon={''} label={'Sign out'} to={'/login'} />
        ) : (
          <TitleButton icon={''} label={'Sign in'} to={'/login'} />
        )}
      </TitleLayout>
      <ToolsLayout>
        <ToolButton icon={''} label={'Browse'} handleClick={() => {}} />
        <ToolButton icon={''} label={'Search'} handleClick={() => {}} />
        <ToolButton icon={''} label={'Settings'} handleClick={() => {}} />
      </ToolsLayout>
      <div className="content-wrapper">
        <ContentLayout>
          <Navigator>
            <NavigatorButton icon={''} label={'Home'} to={'/'} />
            <NavigatorButton icon={''} label={'Dashboard'} to={'/dashboard'} />
            <NavigatorButton icon={''} label={'Settings'} to={'/settings'} />
          </Navigator>
          <View location={location}>
            <Switch>
              <Route exact path="/dashboard" component={UniversalDashboard} />
              <Route exact path="/settings" component={UniversalSettings} />
              <Route exact path="/login" component={UniversalLogin} />
            </Switch>
          </View>
        </ContentLayout>
        <FooterLayout>
          <div>Footer</div>
        </FooterLayout>
      </div>
    </StyledApp>
  </ThemeProvider>
);

type State = {
  inSession: boolean,
};

const mapStateToProps = (state: Function): State => ({
  inSession: state.getIn(['session', 'inSession']),
});

export default withRouter(connect(mapStateToProps)(App));
