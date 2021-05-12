import React, { useRef } from 'react';
import { StyleWrapper } from './Login.styles';
import { useAuth } from '../../contexts/AuthContext';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { signup } = useAuth();

  const handleSubmit = (event) => {
    event.preventDefault();

    signup(emailRef.current.value, passwordRef.current.value);
  };

  return (
    <StyleWrapper>
      <div>
        <h1>Get ready to log innnn</h1>
        <p>Or sign up. Whatever.</p>

        <form>
          <input type="email" ref={emailRef} />
          <input type="password" ref={passwordRef} />
          <button type="submit">Login</button>
        </form>
      </div>
    </StyleWrapper>
  );
};

export default Login;
