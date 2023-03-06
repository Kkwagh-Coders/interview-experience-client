import { useInfiniteQuery } from '@tanstack/react-query';
import { ReplyList } from '../../types/comment.types';
import NestedCommentCard from '../NestedCommentCard/NestedCommentCard';
import styles from './CommentReply.module.css';
import { getCommentRepliesPaginated } from '../../services/comments.services';

type Props = {
  postId: string;
  commentId: string;
};
function CommentReply({ postId, commentId }: Props) {
  // prettier-ignore
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['comments', postId, commentId],
    getNextPageParam: (prevData: {
      message: string;
      data: ReplyList;
      page: { nextPage: number };
    }) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => getCommentRepliesPaginated(postId, commentId, pageParam, 2),
  });

  let scrollFooterElement = <p>Nothing More to Load</p>;
  if (isFetchingNextPage || isLoading) {
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

  const isEmpty = data?.pages[0].data.length === 0;
  return (
    <div className={styles.innerCmt}>
      {isEmpty ? <p className={styles.noReply}>No Reply yet</p> : null}
      {!isEmpty ? (
        <>
          <ul>
            {data?.pages
              .flatMap((page) => page.data)
              .map((commentReply) => (
                <NestedCommentCard commentReply={commentReply} />
              ))}
          </ul>
          <div className={styles.scrollFooter}>{scrollFooterElement}</div>
        </>
      ) : null}
    </div>
  );
}

export default CommentReply;
