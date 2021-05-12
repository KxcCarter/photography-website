import React, { useRef, useState, useEffect } from 'react';
import { StyleWrapper } from './Login.styles';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
//
// MUI
//
import {
  Button,
  TextField,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';

const LoginLogout = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError('Failed to login');
      console.log(error);
    }
    setLoading(false);
    history.push('/manage');
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
          <h2>Log In</h2>
          {error && <h3 style={{ color: 'red' }}>WOW YOU SCREWED UP</h3>}
          <form onSubmit={handleLoginSubmit}>
            {/* <TextField
              variant="filled"
              placeholder="Email"
              type="email"
              ref={emailRef}
            />

            <TextField
              variant="filled"
              placeholder="Password"
              type="password"
              ref={passwordRef}
            /> */}

            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={emailRef} />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" ref={passwordRef} />

            <Button disabled={loading} type="submit" variant="outlined">
              Log In
            </Button>
          </form>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default LoginLogout;
