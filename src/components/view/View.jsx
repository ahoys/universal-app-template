// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.Node,
};

const StyledView = styled.div`
  padding: 16px;
  overflow: hidden;
  flex: 1 1 128px;
`;

export const View: React.StatelessFunctionalComponent<Props> = ({
  children,
}) => <StyledView>{children}</StyledView>;

export default View;
