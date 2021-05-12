import React, { useRef, useState } from 'react';
import { StyleWrapper } from './Login.styles';
import { useAuth } from '../../contexts/AuthContext';

const LoginOrSignup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, logout, login, currentUser } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignupSubmit = async (event) => {
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

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log('This isnt working');
    }
    console.log('YOU LOGGED OUT!!!');
  };

  const Signup = () => {
    return (
      <div>
        <h1>Sign Up</h1>
        {error && <h3 style={{ color: 'red' }}>WOW YOU SCREWED UP</h3>}

        <form onSubmit={handleSignupSubmit}>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" ref={emailRef} />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={passwordRef} />
          <label htmlFor="confirm">Confirm password</label>
          <input id="confirm" type="password" ref={passwordConfirmRef} />
          <button disabled={loading} type="submit">
            Sign up
          </button>
        </form>
      </div>
    );
  };

  const Login = () => {
    return (
      <div>
        <h1>Login (out, actually... heh heh heh)</h1>
        {error && <h3 style={{ color: 'red' }}>WOW YOU SCREWED UP</h3>}

        <button onClick={handleLogout}>Log Out Dawg</button>
      </div>
    );
  };

  return (
    <StyleWrapper>
      <div>
        <p>daaaawg?</p>

        {currentUser ? <Login /> : <Signup />}
      </div>

      {/* <div>
        <h1>Sign Up</h1>
        {error && <h3 style={{ color: 'red' }}>WOW YOU SCREWED UP</h3>}

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">we be emailin</label>
          <input id="email" type="email" ref={emailRef} />
          <label htmlFor="password">Passowrd</label>
          <input id="password" type="password" ref={passwordRef} />
          <label htmlFor="confirm">Confrm pssword</label>
          <input id="confirm" type="password" ref={passwordConfirmRef} />
          <button disabled={loading} type="submit">
            Sign up
          </button>
        </form>
        <div>
          <p>Already have an account?</p>
        </div>
      </div> */}
    </StyleWrapper>
  );
};

export default LoginOrSignup;
