import axios from 'axios';
import { Post, PostCardList, PostFormData } from '../types/post.types';
import { BASE_API_URL } from './serverConfig';
import getTagsFromString from '../utils/getTagsFromString';

export const getPost = (id: string | undefined) => {
  const url = `${BASE_API_URL}/posts/${id}`;
  return axios
    .get<{ message: string; post: Post }>(url, { withCredentials: true })
    .then((res) => res.data.post);
};

export const getPostsPaginated = (page: number, limit: number) => {
  const url = new URL(`${BASE_API_URL}/posts`);

  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  type PostPaginated = {
    message: string;
    data: PostCardList;
    page: { nextPage: number; previousPage: number };
  };

  return axios.get<PostPaginated>(url.href).then((res) => res.data);
};

export const createPost = (postData: PostFormData, status: string) => {
  const url = `${BASE_API_URL}/posts`;
  const tags = getTagsFromString(postData.tags);
  const body = { ...postData, tags, status };

  return axios
    .post<{ message: string }>(url, body, { withCredentials: true })
    .then((response) => response.data);
};
