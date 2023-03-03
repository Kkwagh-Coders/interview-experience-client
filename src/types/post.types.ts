export type Post = {
  title: string;
  content: string;
  company: string;
  commentCount: number;
  role: string;
  postType: string;
  domain: string;
  rating: number;
  createdAt: string;
  views: number;
  isBookmarked: boolean;
  isDownVoted: boolean;
  isUpVoted: boolean;
  postAuthor: string;
  postAuthorId: string;
  tags: string[];
  voteCount: number;
};

export type PostCard = {
  _id: string;
  title: string;
  content: string;
  userId: {
    _id: string;
    username: string;
  };
  company: string;
  role: string;
  postType: string;
  domain: string;
  rating: number;
  status: string;
  createdAt: string;
  votes: number;
  isUpVoted: boolean;
  isDownVoted: boolean;
  isBookmarked: boolean;
  views: number;

  tags: string[];
};

export type PostCardList = PostCard[];

export type PostFormData = {
  title: string;
  role: string;
  company: string;
  domain: string;
  postType: string;
  content: string;
  tags: string;
  rating: number;
};

export type PostPaginated = {
  message: string;
  data: PostCardList;
  page: { nextPage: number; previousPage: number };
};
