import { Map } from 'immutable';

const initialState = new Map({
  username: '',
  token: '',
  inSession: false,
});

const types = {
  RECEIVE_SESSION: ({ state, payload }) =>
    state
      .set('username', payload.username)
      .set('token', payload.token)
      .set('inSession', payload.inSession),
};

export default (state = initialState, action) => {
  return types[action.type]
    ? types[action.type]({ state, payload: action.payload })
    : state;
};
