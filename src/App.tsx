import React, { useState } from 'react';
import '../src/static/css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import { Box, createTheme, PaletteMode, Stack } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import Navbar from './components/layout/Navbar';
import Rightbar from './components/layout/Rightbar';
import Sidebar from './components/layout/Sidebar';

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
        <Navbar />
        <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
          <Sidebar setMode={setMode} mode={mode} />
          <Router>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
            </Routes>
          </Router>
          <Rightbar />
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default App;
