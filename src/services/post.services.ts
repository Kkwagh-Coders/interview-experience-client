import axios from 'axios';
import { PostFormData } from '../types/post.types';
import getTagsFromString from '../utils/getTagsFromString';
import { BASE_API_URL } from './serverConfig';

export const createPost = (postData: PostFormData, status: string) => {
  const tags = getTagsFromString(postData.tags);
  const url = `${BASE_API_URL}/posts`;
  return axios
    .post<{ message: string }>(
      url,
      { ...postData, tags, status },
      { withCredentials: true },
    )
    .then((response) => response.data);
};

export const getPost = {};
