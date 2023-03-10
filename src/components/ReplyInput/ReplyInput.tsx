import { useMutation, useQueryClient } from '@tanstack/react-query';
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
  const queryClient = useQueryClient();

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
      queryClient.refetchQueries(['replies', postId, commentId]);
    },
  });

  return (
    <form className={styles.replyContainer}>
      <textarea
        placeholder="Add a reply..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className={styles.replyBox}
      />

      <button
        type="button"
        disabled={isLoading}
        onClick={() => mutate({ postId, commentId, content })}
        className={`default-button
        ${styles.replyButton}
      `}
      >
        Reply
      </button>
    </form>
  );
}

export default ReplyInput;
