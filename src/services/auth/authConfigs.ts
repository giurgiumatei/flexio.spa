const msalConfig = {
    auth: {
        clientId: 'e929e490-e2b3-4c12-8736-7186d0ddd269',
        authority: 'https://login.microsoftonline.com/common',
        knownAuthorities: [],
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