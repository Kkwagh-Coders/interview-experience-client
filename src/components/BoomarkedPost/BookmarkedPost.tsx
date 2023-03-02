import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getBookmarkedPostsPaginated } from '../../services/post.services';
import { PostCardList } from '../../types/post.types';
import PostListElement from '../PostListElement/PostListElement';

function BookmarkedPost() {
  const { id } = useParams();
  // eslint-disable-next-line object-curly-newline, operator-linebreak
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['bookmared-post', id],
      getNextPageParam: (prevData: {
        message: string;
        data: PostCardList;
        page: { nextPage: number; previousPage: number };
      }) => prevData.page.nextPage,
      queryFn: ({ pageParam = 1 }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        getBookmarkedPostsPaginated(id, pageParam, 2),
    });

  let buttonText = '';
  if (isFetchingNextPage) {
    buttonText = 'Loading...';
  } else if (hasNextPage) {
    buttonText = 'Load more';
  } else {
    buttonText = 'Nothing to load';
  }

  return (
    <>
      {' '}
      {data?.pages
        .flatMap((page) => page.data)
        .map((post) => (
          <PostListElement post={post} key={post._id} />
        ))}
      <div>
        <button
          type="button"
          // className={`default-button ${styles.nextPageButton}`}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {buttonText}
        </button>
      </div>
    </>
  );
}

export default BookmarkedPost;
