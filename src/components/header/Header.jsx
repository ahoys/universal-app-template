import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './Header.scss';
import { connect } from 'react-redux';
import { requestSignIn } from 'actions/actions.account';

const Header = ({ isLoggedIn, username, token, handleLogIn }) => (
  <div className="Header">
    {
      isLoggedIn
      ? <div>{`Logged in! Welcome ${username} of token ${token}`}</div>
      : <div onClick={handleLogIn}>Log in ADMIN ADMIN</div>
    }
  </div>
);

const mapStateToProps = (state, props) => ({
  isLoggedIn: state.getIn(['account', 'username']) !== ''
    && state.getIn(['account', 'token']) !== '',
  username: state.getIn(['account', 'username']),
  token: state.getIn(['account', 'token']),
});

const mapDispatchToProps = (dispatch, props) => ({
  handleLogIn: () => {
    dispatch(requestSignIn({
      username: 'ADMIN',
      password: 'ADMIN',
    }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(style)(Header));
