import { CommentProps } from '../comments/commentProps';

export interface UserFeedProfileProps {
    id: number,
    displayName: string
    city: string,
    photo: string,
    comments: CommentProps[]
}