import axios from 'axios';
import { BASE_API_URL } from './serverConfig';
import { CommentList, ReplyList } from '../types/comment.types';

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
    .get<PostPaginated>(url.href, { withCredentials: true })
    .then((res) => res.data);
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
    .get<PostPaginated>(url.href, { withCredentials: true })
    .then((res) => res.data);
};
