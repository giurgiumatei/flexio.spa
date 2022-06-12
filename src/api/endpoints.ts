import { Environment } from '../environment/environment';

export const ApiEndpoints = {
    user: {
        addUser: Environment.apiUrl + 'user',
        addUserProfile: Environment.apiUrl + 'user/userProfile',
        getUserFeedProfiles: Environment.apiUrl + 'user/get-user-feed-profiles',
        getUserProfile: Environment.apiUrl + 'user/userProfile',
        getUserIdByEmail: Environment.apiUrl + 'user/userId',
        takeOverUserProfile: Environment.apiUrl + 'user/takeOverUserProfile'
    },
    comment: {
        addComment: Environment.apiUrl + 'comment',
        deleteComment: Environment.apiUrl + 'comment'
    }
};