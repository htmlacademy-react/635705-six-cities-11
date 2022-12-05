export type UserCommentType = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
}
export type CommentType = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: UserCommentType;
}

export type CommentsOffersType = {
  offerID: number;
  commentsByOffer: CommentType[];
}

export type CommentSendType = {
  comment: string;
  rating: number;
  offerID: number;
}
