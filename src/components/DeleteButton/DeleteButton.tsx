import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { deletePost } from '../../services/post.services';
import styles from './DeleteButton.module.css';

type Props = {
  postId: string;
  authorId: string;
  postTitle: string;
};

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

function DeleteButton({ postId, authorId, postTitle }: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const user = useAppSelector((state) => state.userState.user);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>
  >({
    mutationFn: () => deletePost(postId),
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: () => {
      queryClient.refetchQueries(['posts']);
      toast.success('Post Deleted Successfully');

      // If the user is on post page he will be redirected to the post list page
      navigate('/posts');
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
        Delete
      </button>

      {isModalOpen ? (
        <div className={styles.DeleteModal}>
          <div className={styles.container}>
            <h2>Confirm Post Delete</h2>
            <p>
              Are you sure you want to delete the post with title &quot;
              <span className="bold-text">{postTitle}</span>
              &quot; ?
            </p>
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

export default DeleteButton;
