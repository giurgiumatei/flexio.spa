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
          className='Logo'
          src='https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6khv6GqRdNnx7NwXs1M3EMoAJtliUtj...Fv9fk6'
          alt='Flexio'
        />
      </div>
    </div>
  );
};

export default App;
