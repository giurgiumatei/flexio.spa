import React from 'react';
import ApiService from './services/apiService';
import AuthService from './services/auth/authService';

const App = () => {
  const handleLogin = () => {
    AuthService.signIn();
  };

  const handleApiCall = () => {
    ApiService.get<number>('/Version').then((response) => console.log(response));
  };

  return (
    <>
      <button type='button' id='signIn' onClick={handleLogin}>
        Sign In
      </button>
      <button type='button' id='apiCall' onClick={handleApiCall}>
        Call API
      </button>
    </>
  );
};

export default App;
