import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { MdDeleteOutline } from 'react-icons/md';
import { toast } from 'react-hot-toast';
import { useAppSelector } from '../../redux/store';
import styles from './DeleteCommentButton.module.css';
import { deleteComment } from '../../services/comments.services';

type Props = {
  postId: string;
  commentId: string;
  authorId: string;
};

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

function DeleteCommentButton({ postId, commentId, authorId }: Props) {
  const queryClient = useQueryClient();

  const user = useAppSelector((state) => state.userState.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>
  >({
    mutationFn: () => deleteComment(postId, commentId),
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: () => {
      queryClient.refetchQueries(['comments', postId]);
      toast.success('Comment Deleted Successfully');
    },
  });

  // If the use is not a admin and also not the author then don't show delete
  if (!user?.isAdmin && user?.userId !== authorId) {
    return null;
  }

  return (
    <>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => setIsModalOpen(true)}
        disabled={isLoading}
      >
        <MdDeleteOutline />
      </button>

      {isModalOpen ? (
        <div className={styles.DeleteModal}>
          <div className={styles.container}>
            <h2>Confirm Comment Delete</h2>
            <p>Are you sure you want to delete this comment</p>
            <div>
              <button
                type="button"
                className={styles.modalCloseButton}
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
              <button
                type="button"
                className={styles.modalDeleteButton}
                onClick={() => mutate()}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default DeleteCommentButton;
