import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { deletePost } from '../../services/post.services';
import styles from './DeleteButton.module.css';

type Props = {
  postId: string;
};

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

function DeleteButton({ postId }: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

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
      queryClient.invalidateQueries(['posts']);
      toast.success('Post Deleted Successfully');

      // If the user is on post page he will be redirected to the post list page
      navigate('/posts');
    },
  });

  return (
    <button
      type="button"
      className={styles.deleteButton}
      onClick={() => mutate()}
      disabled={isLoading}
    >
      Delete
    </button>
  );
}

export default DeleteButton;
