import { UserProps } from './../../interfaces/users/userProps';
import { InteractionRequiredAuthError, PublicClientApplication } from '@azure/msal-browser';
import userService from '../users/userService';
import { msalConfig, msalRequest } from './authConfigs';
import authStore from '../../store/auth';


class AuthService {
    private _msal: PublicClientApplication;

    constructor() {
        this._msal = new PublicClientApplication(msalConfig);
        this._msal
            .handleRedirectPromise()
            .then(this.handleResponse)
            .then(() => {
                if (authStore.getState().isLoggedIn) return;

                this.signIn();
            });
    }

    signIn = () => {
        this._msal.loginRedirect(msalRequest);
    };

    logOut = () => {
        const logOutRequest = {
            account: this._msal.getAccountByUsername(authStore.getState().currentUser.username)
        };

        this._msal
        .logout(logOutRequest)
        .then(() => authStore.logout());
    };

    acquireUserToken = (request) => {
        request.account = this._msal.getAccountByUsername(authStore.getState().currentUser.username);

        return this._msal
            .acquireTokenSilent(request)
            .then((response) => {                
                if(!response.accessToken || response.accessToken === '') {
                    throw new InteractionRequiredAuthError();
                }
                return this.handleResponse(response);
            })
            .catch((error) => {
                if (error instanceof InteractionRequiredAuthError) {
                    return this._msal.acquireTokenPopup(request);
                }
            });
    };

    handleResponse = (response) => {
        if (response != null) {
            authStore.login(response.account);
            this.handleUserNew(response.account.idTokenClaims);
        } else {
            const currentAccounts = this._msal.getAllAccounts();

            if (currentAccounts === null || currentAccounts.length !== 1) {
                return;
            }

            authStore.login(currentAccounts[0]);
        }
        return response;
    };

    handleUserNew = async (idTokenClaims) => {
        if (idTokenClaims.newUser) {
            const newUser : UserProps = {
                city: idTokenClaims.city,
                country: idTokenClaims.country,
                email: idTokenClaims.emails[0],
                firstName: idTokenClaims.family_name,
                lastName: idTokenClaims.given_name,
                displayName: idTokenClaims.name
            };

            await userService.addUser(newUser);
        }
    };
}

export default new AuthService();