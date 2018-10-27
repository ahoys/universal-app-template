import React from 'react';

const Header = ({ isLoggedIn, isInitialized, handleLogIn }) => {
  if (isLoggedIn) {
    return (
      <div>
        isLoggedIn!
      </div>
    );
  }
  return (
    <div onClick={handleLogIn}>
      {`Click to log in. IsInitialized: ${isInitialized}`}
    </div>
  );
};

export default Header;
