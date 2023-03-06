import axios from 'axios';
import { Post, PostFormData, PostPaginated } from '../types/post.types';
import { BASE_API_URL } from './serverConfig';
import getTagsFromString from '../utils/getTagsFromString';

export const getPost = (id: string | undefined) => {
  const url = `${BASE_API_URL}/posts/${id}`;
  return axios
    .get<{ message: string; post: Post }>(url, { withCredentials: true })
    .then((res) => res.data.post);
};

export const getMostViewedPosts = (limit: number) => {
  const page = 1;
  const url = new URL(`${BASE_API_URL}/posts`);

  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());
  url.searchParams.set('sortBy', 'views');

  return axios
    .get<PostPaginated>(url.href, { withCredentials: true })
    .then((res) => res.data);
};

export const getPostsPaginated = (
  page: number,
  limit: number,
  filter: {
    search: string;
    sortBy: string;
    articleType: string;
    jobRole: string;
    company: string;
    rating: string;
  },
) => {
  const url = new URL(`${BASE_API_URL}/posts`);

  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  if (filter.search.length !== 0) {
    url.searchParams.set('search', filter.search);
  }

  if (filter.sortBy.length !== 0) {
    url.searchParams.set('sortBy', filter.sortBy);
  }

  if (filter.articleType.length !== 0) {
    url.searchParams.set('articleType', filter.articleType);
  }

  if (filter.jobRole.length !== 0) {
    url.searchParams.set('jobRole', filter.jobRole);
  }

  if (filter.company.length !== 0) {
    url.searchParams.set('company', filter.company);
  }

  if (filter.rating.length !== 0) {
    url.searchParams.set('rating', filter.rating);
  }

  return axios
    .get<PostPaginated>(url.href, { withCredentials: true })
    .then((res) => res.data);
};

export const createPost = (postData: PostFormData, status: string) => {
  const url = `${BASE_API_URL}/posts`;
  const tags = getTagsFromString(postData.tags);
  const body = { ...postData, tags, status };

  type CreatePost = { message: string; postId: string };

  return axios
    .post<CreatePost>(url, body, { withCredentials: true })
    .then((response) => response.data);
};

export const getBookmarkedPostsPaginated = (
  userId: string | undefined,
  page: number,
  limit: number,
) => {
  const url = new URL(`${BASE_API_URL}/posts/user/bookmarked/${userId}`);
  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  return axios
    .get<PostPaginated>(url.href, { withCredentials: true })
    .then((res) => res.data);
};

export const getUserPostPaginated = (
  userId: string | undefined,
  page: number,
  limit: number,
) => {
  const url = new URL(`${BASE_API_URL}/posts/user/all/${userId}`);
  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  return axios
    .get<PostPaginated>(url.href, { withCredentials: true })
    .then((res) => res.data);
};

export const deletePost = (postId: string) => {
  const url = `${BASE_API_URL}/posts/${postId}`;

  return axios
    .delete<{ message: string }>(url, { withCredentials: true })
    .then((response) => response.data);
};

export const toggleBookmark = (postId: string, isBookmarked: boolean) => {
  const url = `${BASE_API_URL}/posts/bookmark/${postId}`;

  // Remove the bookmark if already bookmarked
  if (isBookmarked) {
    return axios
      .delete<{ message: string }>(url, { withCredentials: true })
      .then((response) => response.data);
  }

  // If not bookmarked then bookmark the post
  return axios
    .post<{ message: string }>(url, {}, { withCredentials: true })
    .then((response) => response.data);
};

export const getCompanyAndRoleList = () => {
  const url = new URL(`${BASE_API_URL}/posts/data/company-roles`);

  type ResponseType = {
    message: string;
    data: {
      company: string[];
      role: string[];
    };
  };
  return axios.get<ResponseType>(url.href).then((res) => res.data);
};
