export type Post = {
  title: string;
  content: string;
  company: string;
  commentCount: number;
  role: string;
  postType: string;
  domain: string;
  rating: number;
  createdAt: Date;
  views: number;
  isBookmarked: boolean;
  isDownVoted: boolean;
  isUpVoted: boolean;
  postAuthor: string;
  postAuthorId: string;
  tags: string[];
  voteCount: number;
};
