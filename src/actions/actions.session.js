// @flow
import {
  RequestSessionAction,
  ReceiveSessionAction,
} from './actions.session.flow';

/**
 * Requests a new session.
 * At least username and password are required.
 * @param {string} password
 * @param {string} token
 */
export const requestSession = (
  username: string,
  password: string
): RequestSessionAction => ({
  type: 'REQUEST_SESSION',
  payload: {
    username,
    password,
    lang: 'en',
    relogin: 'false',
  },
});

/**
 * Receives a new session.
 * Any old sessions will be replaced.
 * @param {string} username
 * @param {string} token
 */
export const receiveSession = (
  username: string,
  token: string
): ReceiveSessionAction => ({
  type: 'RECEIVE_SESSION',
  payload: {
    username,
    token,
    inSession: username && token,
  },
});
