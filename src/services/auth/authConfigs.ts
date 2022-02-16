const msalConfig = {
    auth: {
        clientId: '',
        authority: '',
        knownAuthorities: [''],
        redirectUri: ''
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