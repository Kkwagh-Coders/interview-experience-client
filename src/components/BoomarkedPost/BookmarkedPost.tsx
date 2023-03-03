import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBookmarkedPostsPaginated } from '../../services/post.services';
import { PostCardList } from '../../types/post.types';
import PostListElement from '../PostListElement/PostListElement';
import styles from './BookmarkedPost.module.css';

function BookmarkedPost() {
  const { id } = useParams();
  // prettier-ignore
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['bookmared-post', id],
    getNextPageParam: (prevData: {
      message: string;
      data: PostCardList;
      page: { nextPage: number; previousPage: number };
    }) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => getBookmarkedPostsPaginated(id, pageParam, 2),
  });

  let scrollFooterElement = <p>Nothing More to Load</p>;
  if (isFetchingNextPage) {
    scrollFooterElement = <p>Loading...</p>;
  } else if (hasNextPage) {
    scrollFooterElement = (
      <button
        type="button"
        className={`default-button ${styles.nextPageButtonBookmark}`}
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        Load More
      </button>
    );
  }

  const isEmpty = data?.pages[0].data.length === 0;
  return (
    <>
      {isEmpty ? <p>No Bookmarked Post</p> : null}
      {!isEmpty ? (
        <>
          {data?.pages
            .flatMap((page) => page.data)
            .map((post) => (
              <PostListElement post={post} key={post._id} />
            ))}
          <div className={styles.scrollFooter}>{scrollFooterElement}</div>
        </>
      ) : null}
    </>
  );
}

export default BookmarkedPost;
