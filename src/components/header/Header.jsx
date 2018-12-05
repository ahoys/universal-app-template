import React from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { requestSession } from 'actions/actions.session';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 32px;
  padding: 0 8px;
  background: black;
  color: white;
  svg {
    margin-right: 8px;
  }
`;

const Header = ({ isLoggedIn, username, token, handleLogIn }) => (
  <StyledHeader>
    {/* <FontAwesomeIcon icon={faBars} /> */}
    {isLoggedIn ? (
      <div>{`Logged in! Welcome ${username} of token ${token}`}</div>
    ) : (
      <div onClick={handleLogIn}>Log in ADMIN ADMIN</div>
    )}
  </StyledHeader>
);

const mapStateToProps = (state, props) => ({
  isLoggedIn:
    state.getIn(['session', 'username']) !== '' &&
    state.getIn(['session', 'token']) !== '',
  username: state.getIn(['session', 'username']),
  token: state.getIn(['session', 'token']),
});

const mapDispatchToProps = (dispatch, props) => ({
  handleLogIn: () => {
    dispatch(requestSession('ADMIN', 'ADMIN'));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
