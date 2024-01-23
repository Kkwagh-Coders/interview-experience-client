import axios from 'axios';
import {
  Post,
  PostFormData,
  PostPaginated,
  RelatedPost,
} from '../types/post.types';
import getTagsFromString from '../utils/getTagsFromString';
import { BASE_API_URL } from './serverConfig';

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
  signal: AbortSignal | undefined,
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
    .get<PostPaginated>(url.href, { withCredentials: true, signal })
    .then((res) => res.data)
    .then((data) => {
      const postQueryData = structuredClone(data);
      if (postQueryData.data.length < limit) {
        postQueryData.page.nextPage = undefined;
      }
      return postQueryData;
    });
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
    .then((res) => res.data)
    .then((data) => {
      const postQueryData = structuredClone(data);
      if (postQueryData.data.length < limit) {
        postQueryData.page.nextPage = undefined;
      }
      return postQueryData;
    });
};

export const getRelatedPosts = (postId: string, limit: number) => {
  const url = new URL(`${BASE_API_URL}/posts/related/${postId}`);
  url.searchParams.set('limit', limit.toString());

  type ResponseType = {
    message: string;
    relatedPosts: RelatedPost[];
  };

  return axios
    .get<ResponseType>(url.href, { withCredentials: true })
    .then((res) => res.data)
    .then((data) => data.relatedPosts);
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
    .then((res) => res.data)
    .then((data) => {
      const postQueryData = structuredClone(data);
      if (postQueryData.data.length < limit) {
        postQueryData.page.nextPage = undefined;
      }
      return postQueryData;
    });
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

export const editPost = (
  editedPostData: PostFormData,
  postId: string | undefined,
  status: string,
) => {
  const url = `${BASE_API_URL}/posts/edit`;
  const tags = getTagsFromString(editedPostData.tags);
  const body = {
    ...editedPostData,
    tags,
    status,
    postId,
  };

  type EditPostResponse = { message: string };

  return axios
    .put<EditPostResponse>(url, body, { withCredentials: true })
    .then((response) => response.data);
};

export const upVotePost = (postId: string) => {
  const url = `${BASE_API_URL}/posts/upvote/${postId}`;

  return axios
    .post<{ message: string }>(url, {}, { withCredentials: true })
    .then((response) => response.data);
};

export const downVotePost = (postId: string) => {
  const url = `${BASE_API_URL}/posts/downvote/${postId}`;

  return axios
    .post<{ message: string }>(url, {}, { withCredentials: true })
    .then((response) => response.data);
};
