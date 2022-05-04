import { CommentProps } from '../comments/commentProps';

export interface UserProfileProps {
    userId: number,
    displayName: string
    city: string,
    country: string,
    gender: string,
    photo: string,
    comments: CommentProps[]
}