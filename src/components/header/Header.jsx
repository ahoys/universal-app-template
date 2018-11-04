import React from 'react';
import { connect } from 'react-redux';
import { setAccount } from 'actions/actions.account';

const Header = ({ isLoggedIn, isInitialized, handleLogIn }) => {
  if (isLoggedIn) {
    return (
      <div>
        isLoggedIn!
      </div>
    );
  }
  return (
    <div onClick={handleLogIn}>
      {`Click to log in. IsInitialized: ${isInitialized}`}
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  isLoggedIn: state.account.token !== '' && state.account.username !== '',
  isInitialized: state.session.isInitialized,
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
)(Header);
