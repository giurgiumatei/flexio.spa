const msalConfig = {
    auth: {
        clientId: 'e929e490-e2b3-4c12-8736-7186d0ddd269',
        authority: 'https://flexioorg.b2clogin.com/flexioorg.onmicrosoft.com/B2C_1_SignUpAndSignIn',
        knownAuthorities: ['flexioorg.b2clogin.com'],
        redirectUri: 'http://localhost:8080'
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
    }
};

const msalRequest = {
    scopes: ['https://flexioorg.onmicrosoft.com/api/flexio']
};

export { msalConfig, msalRequest };