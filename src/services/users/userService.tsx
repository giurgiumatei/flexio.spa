import { ApiEndpoints } from '../../api/endpoints';
import { PaginationQuery } from '../../api/paginationQuery';
import { UserFeedProfileProps } from '../../interfaces/users/userFeedProfileProps';
import { UserProps } from '../../interfaces/users/userProps';
import ApiService from '../apiService';

class UserService {
    addUser = (data: UserProps) => ApiService.post<boolean, UserProps>(ApiEndpoints.user.add, data);
    getUserFeedProfiles = (pageNumber: number, pageSize: number) => ApiService.get<UserFeedProfileProps[]>(ApiEndpoints.user.getUserFeedProfiles + PaginationQuery(1, 1))
}

export default new UserService();