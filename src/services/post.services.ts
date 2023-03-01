import axios from 'axios';
import { Post, PostCardList } from '../types/post.types';
import { BASE_API_URL } from './serverConfig';

export const getPost = (id: string | undefined) => {
  const url = `${BASE_API_URL}/posts/${id}`;
  return axios
    .get<{ message: string; post: Post }>(url, { withCredentials: true })
    .then((res) => res.data.post);
};

export type AllPostPaginated = {
  message: string;
  data: PostCardList;
  page: { nextPage: number; previousPage: number };
};

export const getPostsPaginated = (page: number, limit: number) => {
  const url = new URL(`${BASE_API_URL}/posts`);

  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  return axios.get<AllPostPaginated>(url.href).then((res) => res.data);
};
