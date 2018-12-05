// @flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
  children?: React.Node,
};

const StyledFooterLayout = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
  padding: 0 16px;
  background: #1d1d1d;
  color: #ffffff;
  font-size: 0.8rem;
`;

export const FooterLayout: React.StatelessFunctionalComponent<Props> = ({
  children,
}) => <StyledFooterLayout>{children}</StyledFooterLayout>;

export default FooterLayout;
