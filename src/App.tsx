import { Box, Stack } from '@mui/material';
import React from 'react';
import Feed from './components/layout/Feed';
import Navbar from './components/layout/Navbar';
import Rightbar from './components/layout/Rightbar';
import Sidebar from './components/layout/Sidebar';
import ApiService from './services/apiService';
import AuthService from './services/auth/authService';

const App = () => {
  const handleLogin = () => {
    AuthService.signIn();
  };

  const handleApiCall = () => {
    ApiService.get<number>('/Version').then((response) =>
      console.log(response)
    );
  };

  return (
    <Box>
      <Navbar/>
      <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
};

export default App;
