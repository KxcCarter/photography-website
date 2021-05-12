import React from 'react';
import { StyleWrapper } from './Login.styles';
import { useAuth } from '../../contexts/AuthContext';

//
// Components
import Login from './Login';
import { Button } from '@material-ui/core';

const LoginOrSignup = ({ handleClose }) => {
  const { logout, currentUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
    handleClose();
  };

  const Signout = () => {
    return (
      <div>
        <h3>Sign out of Admin Mode</h3>
        <Button variant="contained" onClick={handleLogout}>
          Sign Out
        </Button>
      </div>
    );
  };

  return (
    <StyleWrapper>
      <div>
        {currentUser ? <Signout /> : <Login handleClose={handleClose} />}
      </div>
    </StyleWrapper>
  );
};

export default LoginOrSignup;
