import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { createReplyComment } from '../../services/comments.services';
import styles from './ReplyInput.module.css';

type Props = {
  postId: string;
  commentId: string;
};

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

interface ICommentInput {
  postId: string;
  commentId: string;
  content: string;
}

function ReplyInput({ postId, commentId }: Props) {
  const [content, setContent] = useState('');

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  ICommentInput
  >({
    mutationFn: (data) => createReplyComment(data.postId, data.commentId, data.content),
    onError: (error: ErrorResponse<{ message: string }>) => {
      toast.error(error.response.data.message);
    },
    onSuccess: () => {
      setContent('');
      toast.success('Comment Created');
    },
  });

  return (
    <form className={styles.form}>
      <textarea
        placeholder="Add a reply..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={styles.commentBox}
      />

      <button
        type="button"
        disabled={isLoading}
        onClick={() => mutate({ postId, commentId, content })}
        className={`default-button
        ${styles.commentButton}
      `}
      >
        Reply
      </button>
    </form>
  );
}

export default ReplyInput;
