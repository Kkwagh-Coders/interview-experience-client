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
