// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.Node,
};

const StyledContentLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1 1 128px;
`;

export const ContentLayout: React.StatelessFunctionalComponent<Props> = ({
  children,
}) => <StyledContentLayout>{children}</StyledContentLayout>;

export default ContentLayout;
