export interface CommentProps {
    commentId: number | undefined | null,
    displayName: string,
    text: string,
    dateAdded: Date | undefined | null,
    isAnonymous: boolean,
    canBeDeleted: boolean
}