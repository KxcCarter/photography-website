import React, { useRef, useState } from 'react';
import { StyleWrapper } from './Login.styles';
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';

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
    }
    setLoading(false);
    history.push('/manage');
  };

  return (
    <StyleWrapper>
      <div>
        <div className="login">
          <h2>Log In</h2>
          {error && <h3 style={{ color: 'red' }}>WOW YOU SCREWED UP</h3>}
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" ref={emailRef} />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" ref={passwordRef} />
            <button disabled={loading} type="submit">
              Log In
            </button>
          </form>
        </div>

        <div className="logout">
          <h2>Log Out</h2>
          <button>Log Out</button>
        </div>
      </div>
    </StyleWrapper>
  );
};

export default LoginLogout;
