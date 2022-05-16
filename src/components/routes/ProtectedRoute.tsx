import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuthInfo from '../../customHooks/useAuthInfo';
import Home from '../pages/Home';

const ProtectedRoute = ({ redirectPath = '/home', children }) => {
  const isLoggedIn = useAuthInfo((authInfo) => authInfo.isLoggedIn, false);

  if (!isLoggedIn) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Home />;
};

export default ProtectedRoute;
