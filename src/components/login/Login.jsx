import React from 'react';
import style from './Login.scss';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { connect } from 'react-redux';
import { requestSession } from 'actions/actions.session';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleUsername = (username) => {
    this.setState({
      username,
    });
  }

  handlePassword = (password) => {
    this.setState({
      password,
    });
  }

  render() {
    return (
      <div className="Login">
        <div className="form">
          <div className="input">
            <p>Username</p>
            <input type="text" onChange={(e) => this.handleUsername(e.target.value)} />
          </div>
          <div className="input">
            <p>Password</p>
            <input type="password" onChange={(e) => this.handlePassword(e.target.value)} />
          </div>
          <div className="controls">
            <div
              className="button"
              onClick={() => this.props.handleLogIn(this.state.username, this.state.password)}
            >
              Submit
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  handleLogIn: (username, password) => {
    dispatch(requestSession(username, password));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withStyles(style)(Login));
