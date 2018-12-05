// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.Node,
};

const StyledTitleLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: #ffe000;
  color: #212121;
  padding: 0 16px;
  height: 32px;
  h1 {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    user-select: none;
  }
`;

export const TitleLayout: React.StatelessFunctionalComponent<Props> = ({
  children,
}) => <StyledTitleLayout>{children}</StyledTitleLayout>;

export default TitleLayout;
