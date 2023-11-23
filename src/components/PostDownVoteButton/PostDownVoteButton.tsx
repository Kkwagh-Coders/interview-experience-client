import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { BiDownArrow } from 'react-icons/bi';
import { downVotePost } from '../../services/post.services';
import { Post } from '../../types/post.types';
import styles from './PostDownVoteButton.module.css';

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

interface IPostDownVote {
  postId: string;
}

function PostDownVoteButton({ postId, isUpVoted, isDownVoted }: Props) {
  const queryClient = useQueryClient();

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  IPostDownVote
  >({
    mutationFn: (data: IPostDownVote) => downVotePost(data.postId),
    onError: (error: ErrorResponse<{ message: string }>) => {
      toast.error(error.response.data.message);
    },
    onSuccess: () => {
      // Manually changing the Post
      const postData = queryClient.getQueryData<Post>(['post', postId]);
      if (postData) {
        let updatedVoteCount = postData.voteCount;

        // old values
        if (!isUpVoted && !isDownVoted) updatedVoteCount -= 1;
        else if (isUpVoted) updatedVoteCount -= 2;
        else if (isDownVoted) updatedVoteCount += 1;

        queryClient.setQueryData(['post', postId], {
          ...postData,
          isDownVoted: !isDownVoted,
          isUpVoted: false,
          voteCount: updatedVoteCount,
        });
      }

      queryClient.refetchQueries(['posts']);
      queryClient.refetchQueries(['user-post']);
      queryClient.refetchQueries(['bookmarked-post']);
    },
  });

  const handleDownVote = () => {
    if (!postId || isLoading) return;
    mutate({ postId });
  };

  return (
    <BiDownArrow
      className={`${styles.voteArrow} ${styles.downVote} ${
        isDownVoted ? styles.downVoteActive : ''
      }`}
      onClick={handleDownVote}
    />
  );
}

export default PostDownVoteButton;
