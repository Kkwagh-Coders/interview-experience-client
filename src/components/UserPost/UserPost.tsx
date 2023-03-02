import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getUserPostPaginated } from '../../services/post.services';
import { PostCardList } from '../../types/post.types';
import PostListElement from '../PostListElement/PostListElement';

function UserPost() {
  const { id } = useParams();
  // eslint-disable-next-line operator-linebreak, object-curly-newline
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['user-post', id],
      getNextPageParam: (prevData: {
        message: string;
        data: PostCardList;
        page: { nextPage: number; previousPage: number };
      }) => prevData.page.nextPage,
      queryFn: ({ pageParam = 1 }) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        getUserPostPaginated(id, pageParam, 2),
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

export default UserPost;
