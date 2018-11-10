import { Map, List, fromJS } from 'immutable';

const getInitialState = () => ({
  username: '',
  token: '',
});

const types = {
  'REQUEST_SIGN_IN': () => getInitialState(),
  'RECEIVE_SIGN_IN': (state, action) => ({
    username: action.payload.username,
    token: action.payload.token,
  }),
};

const account = (state = getInitialState(), action) => {
  if (types[action.type]) {
    return types[action.type](state, action);
  } else {
    return state;
  }
}

export default account;
