const initialState = {
  isInitialized: false,
};

const initializeSession = ({ isInitialized }) => {
  return {
    isInitialized,
  }
}

const types = {
  'INITIALIZE_SESSION': initializeSession,
};

const session = (state = initialState, action) => {
  if (types[action.type]) {
    return types[action.type](action);
  } else {
    return state;
  }
}

export default session;
