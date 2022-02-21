import React from 'react';
import AuthService from './services/auth/authService';

const App = () => (
    <button type='button' id='signIn' onClick={() => AuthService.signIn()}>
        Sign In
    </button>    
);

export default App;
