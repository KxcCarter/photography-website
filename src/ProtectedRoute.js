import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

const ProtectedRoute = ({ children, ...rest }) => {
  //   location = useLocation();
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={() =>
        currentUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
