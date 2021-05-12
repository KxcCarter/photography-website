import React, { useRef, useState } from 'react';

const Signup = (props) => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
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
    handleClose();
  };
  return (
    <div>
      <h2>Create Account</h2>
      {error && <h3 style={{ color: 'red' }}>{JSON.stringify(error)}</h3>}

      <form onSubmit={handleSignupSubmit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" ref={emailRef} />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" ref={passwordRef} />
        <label htmlFor="confirm">Confirm password</label>
        <input id="confirm" type="password" ref={passwordConfirmRef} />

        <Button disabled={loading} type="submit" variant="contained">
          Create
        </Button>
      </form>
    </div>
  );
};

export default Signup;
