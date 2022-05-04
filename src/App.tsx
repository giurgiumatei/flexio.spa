import React from 'react';
import '../src/static/css/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import UserProfile from './components/pages/users/UserProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/user/:id' element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
