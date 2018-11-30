// @flow

type Action = {
  +username: string,
  +password: string,
  +token: string,
};

/**
 * Requests a new session.
 * At least username and password are required.
 * @param {string} password
 * @param {string} token
 */
export const requestSession = ( username: Action, password: Action ) => ({
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
export const receiveSession = ( username: Action, token: Action ) => ({
  type: 'RECEIVE_SESSION',
  payload: {
    username,
    token,
    inSession: username && token,
  },
});
