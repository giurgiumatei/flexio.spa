import { ApiEndpoints } from '../../api/endpoints';
import { AddCommentProps } from '../../interfaces/comments/addCommentProps';
import ApiService from '../apiService';

class CommentService {
  addComment = (data: AddCommentProps) =>
    ApiService.post<boolean, AddCommentProps>(
      ApiEndpoints.comment.addComment,
      data
    );
  deleteComment = (commentId: number) =>
    ApiService.delete<boolean, number>(
      ApiEndpoints.comment.deleteComment + `?commentId=${commentId}`
    );
}

export default new CommentService();
