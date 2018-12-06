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
    transform: rotate(-2deg);
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
      1px 1px 0 #000;
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
    user-select: none;
    color: white;
  }
`;

export const TitleLayout: React.StatelessFunctionalComponent<Props> = ({
  children,
}) => <StyledTitleLayout>{children}</StyledTitleLayout>;

export default TitleLayout;
