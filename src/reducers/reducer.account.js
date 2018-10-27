const initialState = {
  token: '',
  username: '',
};

const setAccount = ({ token, username }) => {
  return {
    token,
    username,
  }
}

const removeAccount = () => {
  return initialState;
}

const types = {
  'SET_ACCOUNT': setAccount,
  'REMOVE_ACCOUNT': removeAccount,
};

const account = (state = initialState, action) => {
  if (types[action.type]) {
    return types[action.type](action);
  } else {
    return state;
  }
}

export default account;
