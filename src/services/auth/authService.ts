import { InteractionRequiredAuthError, PublicClientApplication } from '@azure/msal-browser';
import { msalConfig, msalRequest } from './authConfigs';



class AuthService {
    private _msal: PublicClientApplication;
    private _username = '';

    constructor() {
        this._msal = new PublicClientApplication(msalConfig);
        this._msal
            .handleRedirectPromise()
            .then(this.handleResponse);
        
    }

    signIn = () => {
        this._msal.loginRedirect(msalRequest);
    };

    logOut = () => {
        const logOutRequest = {
            account: this._msal.getAccountByHomeId(this._username)
        };

        this._msal.logout(logOutRequest);
    };

    acquireUserToken = (request) => {
        request.account = this._msal.getAccountByUsername(this._username);

        return this._msal
            .acquireTokenSilent(request)
            .then((response) => {
                if(!response.accessToken || response.accessToken === '') {
                    throw new InteractionRequiredAuthError();
                }
                return this.handleResponse(request);
            })
            .catch((error) => {
                if (error instanceof InteractionRequiredAuthError) {
                    return this._msal.acquireTokenRedirect(request);
                }
            });
    };

    handleResponse = (response) => {
        if (response != null) {
            this._username = response.account.username;
        } else {
            const currentAccounts = this._msal.getAllAccounts();

            if (currentAccounts === null || currentAccounts.length !== 1) {
                return;
            }

            this._username = currentAccounts[0].username;
        }
    };
}

export default new AuthService();