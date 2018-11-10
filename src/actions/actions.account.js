export const requestSignIn = ({ username, password }) => {
  return {
    type: 'REQUEST_SIGN_IN',
    payload: {
      username,
      password,
    },
  };
};

export const receiveSignIn = (username, token) => {
  return {
    type: 'RECEIVE_SIGN_IN',
    payload: {
      username,
      token,
    },
  };
};
