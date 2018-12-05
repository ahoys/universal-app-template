// @flow
import * as React from 'react';
import styled from 'styled-components';
import commonThemes from 'components/commonThemes';

type Props = {
  children: React.Node,
};

const StyledNavigator = styled.div`
  display: flex;
  flex-direction: column;
  width: 25vh;
  min-width: 128px;
  padding: 16px 0;
  overflow: hidden;
  overflow-y: auto;
`;

export const Navigator: React.StatelessFunctionalComponent<Props> = ({
  children,
}) => <StyledNavigator>{children}</StyledNavigator>;

export default Navigator;
