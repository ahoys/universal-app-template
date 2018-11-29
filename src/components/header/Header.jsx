import React from 'react';
import { connect } from 'react-redux';
import { requestSession } from 'actions/actions.session';

const style = {
  background: 'black',
  color: 'white',
};

const Header = ({ isLoggedIn, username, token, handleLogIn }) => (
  <div style={style}>
    {
      isLoggedIn
      ? <div>{`Logged in! Welcome ${username} of token ${token}`}</div>
      : <div onClick={handleLogIn}>Log in ADMIN ADMIN</div>
    }
  </div>
);

const mapStateToProps = (state, props) => ({
  isLoggedIn: state.getIn(['session', 'username']) !== ''
    && state.getIn(['session', 'token']) !== '',
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
  mapDispatchToProps,
)(Header);
