import React, { useRef, useState } from 'react';
import { StyleWrapper } from './Login.styles';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch (error) {
      setError('Failed to create an account');
    }
    setLoading(false);
  };

  return (
    <StyleWrapper>
      <div>
        <h1>Get ready to log innnn</h1>
        <p>Or sign up. Whatever.</p>
        {error && <h3 style={{ color: 'red' }}>WOW YOU SCREWED UP</h3>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">we be emailin</label>
          <input id="email" type="email" ref={emailRef} />
          <label htmlFor="password">Passowrd</label>
          <input id="password" type="password" ref={passwordRef} />
          <label htmlFor="confirm">Confrm pssword</label>
          <input id="confirm" type="password" ref={passwordConfirmRef} />
          <button disabled={loading} type="submit">
            Login
          </button>
        </form>
      </div>
    </StyleWrapper>
  );
};

export default Login;
