export type Reply = {
  _id: string;
  userId: {
    _id: string;
    username: string;
  } | null;
  content: string;
  createdAt: Date;
};

export type Comment = {
  _id: string;
  userId: {
    _id: string;
    username: string;
  } | null;
  content: string;
  createdAt: Date;
  replies: [Reply];
};

export type CommentList = Comment[];
export type ReplyList = Reply[];
