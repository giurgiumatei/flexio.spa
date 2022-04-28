import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider
} from '@mui/material';
import React, { useState } from 'react';
import Feed from './components/layout/Feed';
import Navbar from './components/layout/Navbar';
import Rightbar from './components/layout/Rightbar';
import Sidebar from './components/layout/Sidebar';
import ApiService from './services/apiService';
import AuthService from './services/auth/authService';
import '../src/static/css/App.css';

const App = () => {
  const handleLogin = () => {
    AuthService.signIn();
  };

  const handleApiCall = () => {
    ApiService.get<number>('/Version').then((response) =>
      console.log(response)
    );
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

export default App;
