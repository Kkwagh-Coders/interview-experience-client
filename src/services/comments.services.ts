import axios from 'axios';
import { BASE_API_URL } from './serverConfig';
import { CommentList, ReplyList } from '../types/comment.types';
import getAuthToken from '../utils/getAuthToken';

export const getCommentsPaginated = (
  postId: string,
  page: number,
  limit: number,
) => {
  const url = new URL(`${BASE_API_URL}/comments/${postId}`);

  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  type PostPaginated = {
    message: string;
    data: CommentList;
    page: { nextPage: number };
  };

  return axios
    .get<PostPaginated>(url.href, { headers: { token: getAuthToken() } })
    .then((res) => res.data);
};

export const createComment = (postId: string, content: string) => {
  const url = `${BASE_API_URL}/comments/${postId}`;

  const body = { content };
  type CreateComment = { message: string; commentId: string };

  return axios
    .post<CreateComment>(url, body, { headers: { token: getAuthToken() } })
    .then((response) => response.data);
};

export const createReplyComment = (
  postId: string,
  commentId: string,
  content: string,
) => {
  const url = `${BASE_API_URL}/comments/replies/${postId}/${commentId}`;

  const body = { content };
  type CreateComment = { message: string; commentId: string };

  return axios
    .post<CreateComment>(url, body, { headers: { token: getAuthToken() } })
    .then((response) => response.data);
};

export const getCommentRepliesPaginated = (
  postId: string,
  commentId: string,
  page: number,
  limit: number,
) => {
  const url = new URL(
    `${BASE_API_URL}/comments/replies/${postId}/${commentId}`,
  );

  url.searchParams.set('page', page.toString());
  url.searchParams.set('limit', limit.toString());

  type PostPaginated = {
    message: string;
    data: ReplyList;
    page: { nextPage: number };
  };

  return axios
    .get<PostPaginated>(url.href, { headers: { token: getAuthToken() } })
    .then((res) => res.data);
};

export const deleteComment = (postId: string, commentId: string) => {
  const url = `${BASE_API_URL}/comments/${postId}/${commentId}`;

  return axios
    .delete<{ message: string }>(url, { headers: { token: getAuthToken() } })
    .then((response) => response.data);
};

export const deleteCommentReply = (
  postId: string,
  commentId: string,
  relpyId: string,
) => {
  const url = `${BASE_API_URL}/comments/replies/${postId}/${commentId}/${relpyId}`;

  return axios
    .delete<{ message: string }>(url, { headers: { token: getAuthToken() } })
    .then((response) => response.data);
};
