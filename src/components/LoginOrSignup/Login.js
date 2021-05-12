import React, { useRef, useState, useEffect } from 'react';
import { StyleWrapper } from './Login.styles';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
//
// MUI
//
import { Button, TextField, FormControl } from '@material-ui/core';

const LoginLogout = ({ handleClose }) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);

      handleClose();
      history.push('/manage');
    } catch (error) {
      setError('Failed to login');
    }
    setLoading(false);
  };

  useEffect(() => {
    return () => {
      setLoading(false);
      setError('');
    };
  }, []);

  return (
    <StyleWrapper>
      <div>
        <div className="login">
          <h3>Log In to Admin Mode</h3>
          {error && <p style={{ color: 'red' }}>{error}. Please try again</p>}
          <form onSubmit={handleLoginSubmit}>
            <FormControl>
              <TextField
                className="field"
                variant="filled"
                placeholder="Email"
                type="email"
                size="small"
                inputRef={emailRef}
              />

              <TextField
                className="field"
                variant="filled"
                placeholder="Password"
                type="password"
                size="small"
                inputRef={passwordRef}
              />

              <Button disabled={loading} type="submit" variant="contained">
                Log In
              </Button>
            </FormControl>
          </form>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default LoginLogout;
