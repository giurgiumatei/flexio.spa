import { Environment } from '../environment/environment';

export const ApiEndpoints = {
    user: {
        add: Environment.apiUrl + 'user',
        getUserFeedProfiles: Environment.apiUrl + 'user/get-user-feed-profiles'
    }
};