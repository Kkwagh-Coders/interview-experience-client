export type Reply = {
  _id: string;
  userId: {
    _id: string;
    username: string;
  } | null;
  content: string;
  createdAt: string;
};

export type Comment = {
  _id: string;
  userId: {
    _id: string;
    username: string;
  } | null;
  content: string;
  createdAt: string;
  replies: Reply[];
};

export type CommentList = Comment[];
export type ReplyList = Reply[];
