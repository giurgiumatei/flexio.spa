import React, { useState } from 'react';
import '../src/static/css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import UserProfile from './components/pages/users/UserProfile';
import {
  Box,
  createTheme,
  PaletteMode,
  Stack,
  ThemeProvider
} from '@mui/material';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import TakeOverProfile from './components/pages/users/TakeOverProfile';
import SearchBar from './components/controls/SearchBar';

const App = () => {
  const [mode, setMode] = useState('light');

  const darkTheme = createTheme({
    palette: {
      mode: mode as PaletteMode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Router>
          <Navbar />
          <Stack direction={'row'} spacing={0} justifyContent={'space-between'}>
            <Sidebar setMode={setMode} mode={mode} />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/user/:id' element={<UserProfile />} />
              <Route path='/takeOverProfile/:id' element={<TakeOverProfile />} />
            </Routes>
          </Stack>
        </Router>
      </Box>
    </ThemeProvider>
  );
};

export default App;
