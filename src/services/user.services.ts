import axios from 'axios';
import {
  ProfileStats,
  User,
  UserReduxState,
  UserUpdate,
} from '../types/user.types';
import getAuthToken from '../utils/getAuthToken';
import { BASE_API_URL } from './serverConfig';

export const getUserStatus = () => {
  const url = `${BASE_API_URL}/user/status`;
  return axios
    .get<UserReduxState>(url, { headers: { token: getAuthToken() } })
    .then((response) => response.data);
};

export const registerUser = (user: User) => {
  const url = `${BASE_API_URL}/user/register`;
  const options = {
    headers: { token: getAuthToken() },
  };

  return axios
    .post<{ message: string }>(url, user, options)
    .then((response) => response.data);
};

export const loginUser = (email: string, password: string) => {
  const url = `${BASE_API_URL}/user/login`;
  const user = { email, password };

  type LoginResponse = { message: string; token: string };
  return axios
    .post<LoginResponse>(url, user, { headers: { token: getAuthToken() } })
    .then((response) => response.data);
};

export const logoutUser = () => {
  const url = `${BASE_API_URL}/user/logout`;
  return axios.post<{ message: string }>(
    url,
    {},
    { headers: { token: getAuthToken() } },
  );
};

export const sendForgotPasswordMail = (email: string) => {
  const url = `${BASE_API_URL}/user/forgot-password`;
  const body = { email };
  const options = {
    headers: { token: getAuthToken() },
  };
  return axios
    .post<{ message: string }>(url, body, options)
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
    .post<{ message: string }>(url, body)
    .then((response) => response.data);
};

export const getUserProfileStats = (userId: string | undefined) => {
  const url = `${BASE_API_URL}/user/profile/${userId}`;
  type ResponseType = { message: string; data: [ProfileStats] };
  return axios
    .get<ResponseType>(url, { headers: { token: getAuthToken() } })
    .then((response) => response.data.data[0]);
};

export const updateUser = (user: UserUpdate) => {
  const url = `${BASE_API_URL}/user/profile`;
  return axios
    .put<{ message: string }>(url, user, { headers: { token: getAuthToken() } })
    .then((response) => response.data);
};

export const searchUser = (
  user: string,
  page: number,
  limit: number,
  signal: AbortSignal | undefined,
) => {
  const url = new URL(`${BASE_API_URL}/user/search`);
  url.searchParams.set('searchparam', user);
  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  type ResponseType = {
    message: string;
    data: {
      _id: string;
      username: string;
      designation: string;
      passingYear: string;
      branch: string;
    }[];
    page: { previousPage: number; nextPage: number };
  };
  return axios
    .get<ResponseType>(url.href, { headers: { token: getAuthToken() }, signal })
    .then((res) => res.data);
};
