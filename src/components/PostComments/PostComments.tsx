import { useInfiniteQuery } from '@tanstack/react-query';
import { getCommentsPaginated } from '../../services/comments.services';
import styles from './PostComments.module.css';
import { CommentList } from '../../types/comment.types';
import CommentCard from '../CommentCard/CommentCard';
import CommentInput from '../CommentInput/CommentInput';

type Props = {
  postId: string;
};

function PostComments({ postId }: Props) {
  // prettier-ignore
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['comments', postId],
    getNextPageParam: (prevData: {
      message: string;
      data: CommentList;
      page: { nextPage: number };
    }) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => getCommentsPaginated(postId, pageParam, 2),
  });

  let scrollFooterElement = <p>Nothing More to Load</p>;
  if (isFetchingNextPage) {
    scrollFooterElement = <p>Loading...</p>;
  } else if (hasNextPage) {
    scrollFooterElement = (
      <button
        type="button"
        className={`default-button ${styles.nextPageButton}`}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        Load More
      </button>
    );
  }

  return (
    <>
      <CommentInput postId={postId} />
      <div className={styles.commentList}>
        <ul>
          {data?.pages
            .flatMap((page) => page.data)
            .map((comment) => (
              <li key={comment._id}>
                <CommentCard postId={postId} comment={comment} />
              </li>
            ))}
        </ul>
        <div className={styles.scrollFooter}>{scrollFooterElement}</div>
      </div>
    </>
  );
}

export default PostComments;
