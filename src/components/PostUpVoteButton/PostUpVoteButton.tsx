import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { BiUpArrow } from 'react-icons/bi';
import { upVotePost } from '../../services/post.services';
import styles from './PostUpVoteButton.module.css';
import { Post } from '../../types/post.types';

type Props = {
  postId: string;
  isVoted: boolean;
};

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

interface IPostUpVote {
  postId: string;
}

function PostUpVoteButton({ postId, isVoted }: Props) {
  const queryClient = useQueryClient();

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  IPostUpVote
  >({
    mutationFn: (data: IPostUpVote) => upVotePost(data.postId),
    onError: (error: ErrorResponse<{ message: string }>) => {
      toast.error(error.response.data.message);
    },
    onSuccess: () => {
      // Manually changing the Post
      const postData = queryClient.getQueryData<Post>(['post', postId]);
      if (postData) {
        postData.isDownVoted = false;
        postData.isUpVoted = !isVoted;
        postData.isDownVoted = isVoted;

        if (isVoted) postData.voteCount -= 1;
        else postData.voteCount += 1;

        queryClient.setQueryData(['post', postId], postData);
      }

      queryClient.refetchQueries(['posts']);
      queryClient.refetchQueries(['user-post']);
      queryClient.refetchQueries(['bookmarked-post']);
    },
  });

  const handleUpVote = () => {
    if (!postId || isLoading) return;
    mutate({ postId });
  };

  return (
    <BiUpArrow
      className={`${styles.voteArrow} ${styles.upVote} ${
        isVoted ? styles.upVoteActive : ''
      }`}
      onClick={handleUpVote}
    />
  );
}

export default PostUpVoteButton;
