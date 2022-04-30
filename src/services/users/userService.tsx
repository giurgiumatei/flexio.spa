import { ApiEndpoints } from '../../api/endpoints';
import { PaginationQuery } from '../../api/paginationQuery';
import { AddUserProfileProps } from '../../interfaces/users/addUserProfileProps';
import { UserFeedProfileProps } from '../../interfaces/users/userFeedProfileProps';
import { UserProps } from '../../interfaces/users/userProps';
import ApiService from '../apiService';

class UserService {
    addUser = (data: UserProps) => ApiService.post<boolean, UserProps>(ApiEndpoints.user.addUser, data);
    addUserProfile = (data: AddUserProfileProps) => ApiService.post<boolean, AddUserProfileProps>(ApiEndpoints.user.addUserProfile, data);
    getUserFeedProfiles = (pageNumber: number, pageSize: number) => ApiService.get<UserFeedProfileProps[]>(ApiEndpoints.user.getUserFeedProfiles + PaginationQuery(1, 10))
}

export default new UserService();