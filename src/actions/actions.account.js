export const setAccount = ({ token, username }) => ({
  type: 'SET_ACCOUNT',
  token,
  username,
});

export const removeAccount = () => ({
  type: 'REMOVE_ACCOUNT',
});
