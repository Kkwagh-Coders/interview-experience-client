import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { BiUpArrow } from 'react-icons/bi';
import { upVotePost } from '../../services/post.services';
import { Post } from '../../types/post.types';
import styles from './PostUpVoteButton.module.css';

type Props = {
  postId: string;
  isUpVoted: boolean;
  isDownVoted: boolean;
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

function PostUpVoteButton({ postId, isUpVoted, isDownVoted }: Props) {
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
        let updatedVoteCount = postData.voteCount;

        if (!isUpVoted && !isDownVoted) updatedVoteCount += 1;
        else if (isUpVoted) updatedVoteCount -= 1;
        else if (isDownVoted) updatedVoteCount += 2;

        queryClient.setQueryData(['post', postId], {
          ...postData,
          isUpVoted: !isUpVoted,
          isDownVoted: false,
          voteCount: updatedVoteCount,
        });
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
        isUpVoted ? styles.upVoteActive : ''
      }`}
      onClick={handleUpVote}
    />
  );
}

export default PostUpVoteButton;
