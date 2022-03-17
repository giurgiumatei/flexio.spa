import { ApiEndpoints } from '../../api/endpoints';
import { UserProps } from '../../interfaces/users/userProps';
import ApiService from '../apiService';

class UserService {
    addUser = (data: UserProps) => ApiService.post<boolean, UserProps>(ApiEndpoints.user.add, data);
}

export default new UserService();