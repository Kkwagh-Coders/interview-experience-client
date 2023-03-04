import axios from 'axios';
import {
  ProfileStats,
  User,
  UserReduxState,
  UserUpdate,
} from '../types/user.types';
import { BASE_API_URL } from './serverConfig';

export const getUserStatus = () => {
  const url = `${BASE_API_URL}/user/status`;
  return axios
    .get<UserReduxState>(url, { withCredentials: true })
    .then((response) => response.data);
};

export const registerUser = (user: User) => {
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

export const logoutUser = () => {
  const url = `${BASE_API_URL}/user/logout`;
  return axios.post<{ message: string }>(url, {}, { withCredentials: true });
};

export const sendForgotPasswordMail = (email: string) => {
  const url = `${BASE_API_URL}/user/forgot-password`;
  const body = { email };
  return axios
    .post<{ message: string }>(url, body, { withCredentials: true })
    .then((response) => response.data);
};

export const resetUserPassword = (
  email: string,
  newPassword: string,
  token: string,
) => {
  const url = `${BASE_API_URL}/user/reset-password/${token}`;
  const body = { email, newPassword };
  return axios
    .post<{ message: string }>(url, body, { withCredentials: true })
    .then((response) => response.data);
};

export const getUserProfileStats = (userId: string | undefined) => {
  const url = `${BASE_API_URL}/user/profile/${userId}`;
  type ResponseType = { message: string; data: [ProfileStats] };
  return axios
    .get<ResponseType>(url, { withCredentials: true })
    .then((response) => response.data.data[0]);
};

export const updateUser = (user: UserUpdate) => {
  const url = `${BASE_API_URL}/user/profile`;
  return axios
    .put<{ message: string }>(url, user, { withCredentials: true })
    .then((response) => response.data);
};

export const searchUser = (user: string, page: number, limit: number) => {
  const url = new URL(`${BASE_API_URL}/user/search`);
  url.searchParams.set('searchparam', user);
  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  return axios.get(url.href, { withCredentials: true }).then((res) => res.data);
};
