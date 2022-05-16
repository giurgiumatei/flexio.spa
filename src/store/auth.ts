import { Subject } from 'rxjs';

const authSubject = new Subject();

const getInitialState = () => ({
    isLoggedIn: false,
    currentUser: {
        id: null,
        name: null,
        username: null
    }
});

let state = getInitialState();

const authStore = {
    initAuthInfo: () => authSubject.next(state),

    subscribe: (callback) => authSubject.subscribe(callback),

    login: (currentUserAccount) => {
        state = {
            isLoggedIn: true,
            currentUser: {
                id: currentUserAccount.homeAccountId,
                name: currentUserAccount.name,
                username: currentUserAccount.username
            }
        };

        authSubject.next(state);
    },

    logout: () => authSubject.next(getInitialState()),

    getState: () => state
};

export default authStore;