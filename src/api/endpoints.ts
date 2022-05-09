import { Environment } from '../environment/environment';

export const ApiEndpoints = {
    user: {
        addUser: Environment.apiUrl + 'user',
        addUserProfile: Environment.apiUrl + 'user/userProfile',
        getUserFeedProfiles: Environment.apiUrl + 'user/get-user-feed-profiles',
        getUserProfile: Environment.apiUrl + 'user/userProfile'
    },
    comment: {
        addComment: Environment.apiUrl + 'comment'
    }
};