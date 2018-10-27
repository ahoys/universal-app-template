import { connect } from 'react-redux';
import { setAccount } from 'actions/actions.account';
import Header from 'components/header/Header';

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
