import debug from 'debug';
import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'reducers';
import ContextProvider from 'components/ContextProvider';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';

// Enable all debugging if development.
if (process.env.DEV === 'true') {
  debug.enable('*');
}

const store = createStore(fromJS(window.REDUX_DATA));

const css = new Set();
const context = {
  insertCss: (...styles) => styles.forEach(style => css.add(style._getCss())),
};

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <ContextProvider context={context} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
