import { User } from '../types/user.types';
import fakeRequest from './fakeRequest';

export const registerUser = (user: User) => {
  const response = { message: 'User Success' };
  return fakeRequest(user, response, true);
};

export const loginUser = (email: string, password: string) => {
  const response = { message: 'User LoggedIn' };
  return fakeRequest({ email, password }, response, true);
};
