import account from './reducer.account';
import main from 'cycles';
import { createCycleMiddleware } from 'redux-cycles';
import { run } from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const configureStore = (initialState) => {  
  const rootReducer = combineReducers({
    account,
  });
  const cycleMiddleware = createCycleMiddleware();
  const { makeActionDriver, makeStateDriver } = cycleMiddleware;
  const store = createStore(rootReducer, initialState, applyMiddleware(cycleMiddleware));
  run(main, {
    ACTION: makeActionDriver(),
    STATE: makeStateDriver(),
    HTTP: makeHTTPDriver(),
  });
  return store;
};

export default configureStore;
