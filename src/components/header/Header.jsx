import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import style from './Header.scss';
import { connect } from 'react-redux';
import { setAccount } from 'actions/actions.account';

const Header = ({ isLoggedIn, handleLogIn }) => (
  <div className="Header">
    {
      isLoggedIn
      ? <div>Logged in!</div>
      : <div onClick={handleLogIn}>Log in</div>
    }
  </div>
);

const mapStateToProps = (state, props) => ({
  isLoggedIn: state.account.token !== '' && state.account.username !== '',
});

const mapDispatchToProps = (dispatch, props) => ({
  handleLogIn: () => {
    dispatch(setAccount({
      token: 'kSidkjd',
      username: 'esimerkki',
    }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(style)(Header));
