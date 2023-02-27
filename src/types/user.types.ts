export type User = {
  username: string;
  about: string;
  password: string;
  isAdmin: boolean;
  email: string;
  designation: string;
  branch: string;
  passingYear: number;
  github: string | null;
  leetcode: string | null;
  linkedin: string | null;
};

export type UserStateData = {
  userId: string;
  username: string;
  about: string;
  email: string;
  isAdmin: boolean;
  designation: string;
  branch: string;
  passingYear: number;
  github: string | null;
  leetcode: string | null;
  linkedin: string | null;
};

export interface UserReduxState {
  isLoading: boolean;
  isLoggedIn: boolean;
  user: UserStateData | null;
}

export type ProfileStats = {
  username: string;
  email: string;
  branch: string;
  passingYear: string;
  designation: string;
  about: string;
  github: string;
  leetcode: string;
  linkedin: string;
  postData: [
    {
      viewCount: number;
      postCount: number;
      upVoteCount: number;
      downVoteCount: number;
    },
  ];
};
