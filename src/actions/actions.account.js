/**
 * Sends a sign-in request to backend.
 * Backend will respond with corresponding information
 * if the credentials were accepted.
 * @param {string} username 
 * @param {string} password 
 */
export const signIn = (username, password) => {
  return {
    type: 'REQUEST_SIGN_IN',
    payload: {
      username,
      password,
    },
  };
};

/**
 * Accepted account information received.
 * @param {string} username 
 * @param {string} token 
 */
export const receiveAccount = (username, token) => {
  return {
    type: 'RECEIVE_ACCOUNT',
    payload: {
      username,
      token,
      inSession: typeof username === 'string'
        && username.trim() !== ''
        && typeof token === 'string'
        && token.trim() !== ''
    },
  };
};
