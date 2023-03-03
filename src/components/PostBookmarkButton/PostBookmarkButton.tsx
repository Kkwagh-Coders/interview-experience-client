import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { BsBookmarkDashFill } from 'react-icons/bs';
import { toggleBookmark } from '../../services/post.services';
import styles from './PostBookmarkButton.module.css';

type Props = {
  postId: string;
  isBookmarked: boolean;
};

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

interface IToggleBookmark {
  postId: string;
  isBookmarkedPost: boolean;
}

function PostBookmarkButton({ postId, isBookmarked }: Props) {
  const [isBookmarkedPost, setIsBookmarkedPost] = useState(isBookmarked);
  const queryClient = useQueryClient();

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  IToggleBookmark
  >({
    mutationFn: (data) => toggleBookmark(data.postId, data.isBookmarkedPost),
    onError: (error: ErrorResponse<{ message: string }>) => {
      toast.error(error.response.data.message);
    },
    onSuccess: () => {
      setIsBookmarkedPost((state) => !state);
      queryClient.invalidateQueries(['post']);
      queryClient.invalidateQueries(['user-post']);
      queryClient.invalidateQueries(['bookmarked-post']);
    },
  });

  return (
    <BsBookmarkDashFill
      className={`
        ${styles.bookmark} 
        ${isBookmarkedPost ? styles.bookmarkActive : null}
        ${isLoading ? styles.bookmarkDisabled : null}
      `}
      onClick={() => mutate({ postId, isBookmarkedPost })}
    />
  );
}

export default PostBookmarkButton;
