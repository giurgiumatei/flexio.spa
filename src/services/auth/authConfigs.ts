const msalConfig = {
    auth: {
        clientId: 'e929e490-e2b3-4c12-8736-7186d0ddd269',
        authority: 'https://flexioorg.b2clogin.com/flexioorg.onmicrosoft.com/B2C_1_SignUpAndSignIn',
        knownAuthorities: ['https://flexioorg.b2clogin.com/flexioorg.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_SignUpAndSignIn'],
        redirectUri: 'http://localhost:8080'
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: false
    }
};

const msalRequest = {
    scopes: ['']
};

export { msalConfig, msalRequest };