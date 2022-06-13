import { ApiEndpoints } from '../../api/endpoints';
import { PaginationQuery } from '../../api/paginationQuery';
import { FormDataBuilder } from '../../helpers/formDataBuilder';
import { AddUserProfileProps } from '../../interfaces/users/addUserProfileProps';
import { TakeOverUserProfileProps } from '../../interfaces/users/takeOverUserProfileProps';
import { UserFeedProfileProps } from '../../interfaces/users/userFeedProfileProps';
import { UserProfileProps } from '../../interfaces/users/userProfileProps';
import { UserProps } from '../../interfaces/users/userProps';
import ApiService from '../apiService';

class UserService {
  addUser = (data: UserProps) =>
    ApiService.post<boolean, UserProps>(ApiEndpoints.user.addUser, data);

  addUserProfile = (data: AddUserProfileProps) =>
    ApiService.post<boolean, FormData>(
      ApiEndpoints.user.addUserProfile,
      this.getNewUserProfileFormData(data),
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );

  takeOverUserProfile = (data: TakeOverUserProfileProps) =>
    ApiService.post<boolean, TakeOverUserProfileProps>(ApiEndpoints.user.takeOverUserProfile, data);

  getUserFeedProfiles = (pageNumber: number, pageSize: number) =>
    ApiService.get<UserFeedProfileProps[]>(
      ApiEndpoints.user.getUserFeedProfiles + PaginationQuery(pageNumber, pageSize)
    );

  getUserProfile = (userId: string, currentUserEmail: string) =>
    ApiService.get<UserProfileProps>(
      ApiEndpoints.user.getUserProfile + `?userId=${userId}&currentUserEmail=${currentUserEmail}`
    );

  getUserIdByEmail = (email: string) =>
    ApiService.get<number>(
      ApiEndpoints.user.getUserIdByEmail + `?email=${email}`
    );

  private getNewUserProfileFormData = (
    addUserProfileFormModel: AddUserProfileProps
  ): FormData =>
    new FormDataBuilder()
      .with('FirstName', addUserProfileFormModel.firstName.toString())
      .with('LastName', addUserProfileFormModel.lastName.toString())
      .with('City', addUserProfileFormModel.city.toString())
      .with('Country', addUserProfileFormModel.country.toString())
      .with('GenderId', addUserProfileFormModel.genderId.toString())
      .with('ProfileImage', addUserProfileFormModel.profileImage)
      .build();
}

export default new UserService();
