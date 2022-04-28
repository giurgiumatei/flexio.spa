import { CommentProps } from "../comments/commentProps"

export interface UserFeedProfileProps {
    userId: number,
    displayName: string
    city: string,
    photo: string,
    lastComment: CommentProps
}