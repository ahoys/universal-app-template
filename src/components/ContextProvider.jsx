import React from 'react';
import PropTypes from 'prop-types';
import App from 'components/App';

/**
 * ContextProvided will provide a style context for rest of the application.
 * So basically enables SCSS-support.
 */
export default class ContextProvider extends React.Component {
  static childContextTypes = {
    insertCss: PropTypes.func,
  }

  getChildContext() {
    return { ...this.props.context }
  }

  render() {
    return <App { ...this.props } />;
  }
}
