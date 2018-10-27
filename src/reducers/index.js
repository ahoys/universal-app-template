import accountReducer from './reducer.account';
import session from './reducer.session';
import thunkMiddleware from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from 'redux';

const reducer = combineReducers({
  session: session,
  account: accountReducer,
});

export default (initialState) =>
  createStore(reducer, initialState, applyMiddleware(thunkMiddleware));