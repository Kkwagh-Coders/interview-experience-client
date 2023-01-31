import { User } from '../types/user.types';
import fakeRequest from './fakeRequest';

const registerUser = (user: User) => {
  const response = { message: 'User Success' };
  return fakeRequest(user, response, true);
};

export default registerUser;
