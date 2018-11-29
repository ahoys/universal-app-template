export const requestSession = ( username, password ) => ({
  type: 'REQUEST_SESSION',
  payload: {
    username,
    password,
    lang: 'en',
    relogin: 'false',
  },
});

export const receiveSession = ( username, token ) => ({
  type: 'RECEIVE_SESSION',
  payload: {
    username,
    token,
    inSession: username && token,
  },
});
