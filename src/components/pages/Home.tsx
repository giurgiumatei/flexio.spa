import { createTheme, PaletteMode, Box, Stack } from '@mui/material';
import React, { useState } from 'react';
import apiService from '../../services/apiService';
import authService from '../../services/auth/authService';
import Navbar from '../layout/Navbar';
import Rightbar from '../layout/Rightbar';
import Sidebar from '../layout/Sidebar';
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

  return <Feed />;
};

export default Home;
