import { Map, List, fromJS } from 'immutable';

getInitialState = () => Map({
  items: List([]),
  subItems: Map({}),
});

const setNavigator = ({ state, action }) => {
  return state
  .set('items', fromJS(action.state))
  .set('subItems', fromJS(action.subItems));
};

const deleteNavigator = () => {
  return getInitialState();
};

const types = {
  'SET_ACCOUNT': setNavigator,
  'DELETE_ACCOUNT': deleteNavigator,
};

const navigator = (state = getInitialState(), action) => {
  if (types[action.type]) {
    return types[action.type]({ state, action });
  } else {
    return state;
  }
}

export default navigator;
