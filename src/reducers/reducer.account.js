import { Map } from 'immutable';

const initialState = new Map({
  username: '',
  token: '',
});

const types = {
  /**
   * Receives a new sign in.
   */
  'RECEIVE_ACCOUNT': ({ state, payload }) => state
    .set('username', payload.username)
    .set('token', payload.token),
};

export default (state = initialState, action) => {
  if (types[action.type]) {
    return types[action.type]({
      state,
      payload: action.payload,
    });
  }
  return state;
}
