// @flow
import * as React from 'react';
import styled from 'styled-components';
import commonThemes from 'components/commonThemes';
import { Link } from 'react-router-dom';

type Props = {
  icon: string,
  label: string,
  to: string,
};

const StyledNavigatorButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${commonThemes.button}
  a {
    text-decoration: none;
    color: black;
    padding: 8px 16px;
  }
`;

export const NavigatorButton: React.StatelessFunctionalComponent<Props> = ({
  icon,
  label,
  to,
}) => (
  <StyledNavigatorButton>
    <Link to={to}>{label}</Link>
  </StyledNavigatorButton>
);

export default NavigatorButton;
