import { ApiEndpoints } from '../../api/endpoints';
import { AddCommentProps } from '../../interfaces/comments/addCommentProps';
import ApiService from '../apiService';

class CommentService {
  addComment = (data: AddCommentProps) =>
    ApiService.post<boolean, AddCommentProps>(
      ApiEndpoints.comment.addComment,
      data
    );
}

export default new CommentService();
