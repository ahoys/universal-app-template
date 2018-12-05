// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.Node,
};

const StyledToolsLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #ffffff;
  color: #212121;
  padding: 0 16px;
  height: 32px;
  box-shadow: 0 0 4px #e8e8e8;
`;

export const ToolsLayout: React.StatelessFunctionalComponent<Props> = ({
  children,
}) => <StyledToolsLayout>{children}</StyledToolsLayout>;

export default ToolsLayout;
