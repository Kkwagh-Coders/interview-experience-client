import axios from 'axios';
import { Post } from '../types/post.types';
import { BASE_API_URL } from './serverConfig';

export const getPost = (id: string | undefined) => {
  const url = `${BASE_API_URL}/posts/${id}`;
  return axios
    .get<{ message: string; post: Post }>(url, { withCredentials: true })
    .then((res) => res.data.post);
};

export default {};
