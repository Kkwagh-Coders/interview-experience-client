import axios from 'axios';
import { PostFormData } from '../types/post.types';
import getTagsFromString from '../utils/getTagsFromString';
import { BASE_API_URL } from './serverConfig';

export const createPost = (postData: PostFormData, status: string) => {
  const url = `${BASE_API_URL}/posts`;
  const tags = getTagsFromString(postData.tags);
  const body = { ...postData, tags, status };

  return axios
    .post<{ message: string }>(url, body, { withCredentials: true })
    .then((response) => response.data);
};

export const getPost = {};
