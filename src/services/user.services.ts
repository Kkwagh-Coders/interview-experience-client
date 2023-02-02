import axios from 'axios';
import { UserStateData } from '../types/user.types';
import { BASE_API_URL } from './serverConfig';

export const registerUser = (user: UserStateData) => {
  const url = `${BASE_API_URL}/user/register`;
  return axios
    .post<{ message: string }>(url, user, { withCredentials: true })
    .then((response) => response.data);
};

export const loginUser = (email: string, password: string) => {
  const url = `${BASE_API_URL}/user/login`;
  const user = { email, password };
  return axios
    .post<{ message: string }>(url, user, { withCredentials: true })
    .then((response) => response.data);
};
