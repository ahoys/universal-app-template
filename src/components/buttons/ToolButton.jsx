// @flow
import * as React from 'react';
import styled from 'styled-components';
import commonThemes from 'components/commonThemes';

type Props = {
  icon: string,
  label: string,
  handleClick: Function,
};

const StyledToolButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  ${commonThemes.button}
  h1 {
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export const ToolButton: React.StatelessFunctionalComponent<Props> = ({
  icon,
  label,
  handleClick,
}) => (
  <StyledToolButton onClick={handleClick}>
    <h1>{label}</h1>
  </StyledToolButton>
);

export default ToolButton;
