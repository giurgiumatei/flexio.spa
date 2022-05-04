import React from 'react';
import apiService from '../../services/apiService';
import authService from '../../services/auth/authService';
import Rightbar from '../layout/Rightbar';
import Feed from '../layout/Feed';

const Home = () => {
  const handleLogin = () => {
    authService.signIn();
  };

  const handleApiCall = () => {
    apiService
      .get<number>('/Version')
      .then((response) => console.log(response));
  };

  return (
    <>
      <Feed />
      <Rightbar />
    </>
  );
};

export default Home;
