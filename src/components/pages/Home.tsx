import { createTheme, PaletteMode, Box, Stack, ThemeProvider } from '@mui/material';
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

  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar />
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <Sidebar setMode={setMode} mode={mode} />
          <Feed />
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Home;
