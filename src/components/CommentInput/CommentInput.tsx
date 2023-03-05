import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { createComment } from '../../services/comments.services';
import styles from './CommentInput.module.css';

type Props = {
  postId: string;
};

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

interface ICommentInput {
  postId: string;
  content: string;
}

function CommentInput({ postId }: Props) {
  const [content, setContent] = useState('');

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  ICommentInput
  >({
    mutationFn: (data) => createComment(data.postId, data.content),
    onError: (error: ErrorResponse<{ message: string }>) => {
      toast.error(error.response.data.message);
    },
    onSuccess: () => {
      setContent('');
      toast.success('Comment Created');
    },
  });

  return (
    <form className={styles.commentContainer}>
      <textarea
        placeholder="Add a comment..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={styles.commentBox}
      />

      <button
        type="button"
        disabled={isLoading}
        onClick={() => mutate({ postId, content })}
        className={`default-button
        ${styles.commentButton}
      `}
      >
        Comment
      </button>
    </form>
  );
}

export default CommentInput;
