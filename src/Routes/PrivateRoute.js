import React from 'react';
import { Navigate, Route } from 'react-router';

const PrivateRoute = ({ element: Component, isAuthenticated, ...rest }) => {
    return (
      <Route
        {...rest}
        element={props =>
          isAuthenticated ? <Component {...props} /> : <Navigate to="/" />
        }
      />
    );
  };

export default PrivateRoute;