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

const StyledTitleButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${commonThemes.button}
  a {
    font-size: 0.8rem;
    font-weight: 400;
    text-decoration: none;
    color: black;
  }
`;

export const TitleButton: React.StatelessFunctionalComponent<Props> = ({
  icon,
  label,
  to,
}) => (
  <StyledTitleButton>
    <Link to={to}>{label}</Link>
  </StyledTitleButton>
);

export default TitleButton;
