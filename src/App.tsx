import React from 'react';
import ApiService from './services/apiService';
import AuthService from './services/auth/authService';
import './static/css/App.css';

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
    <div className='App'>
      <div className='app__header'>
        <img
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt='Instagram'
        />
      </div>
    </div>
  );
};

export default App;
