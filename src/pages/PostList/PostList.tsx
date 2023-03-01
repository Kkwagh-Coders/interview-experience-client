import { useInfiniteQuery } from '@tanstack/react-query';
import PostListElement from '../../components/PostListElement/PostListElement';

import styles from './PostList.module.css';
import { getPostsPaginated } from '../../services/post.services';
import { PostCardList } from '../../types/post.types';

function PostList() {
  // prettier-ignore
  const {
    data,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['post'],
    getNextPageParam: (prevData: {
      message: string;
      data: PostCardList;
      page: { nextPage: number; previousPage: number };
    }) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam, 2),
  });

  let buttonText = '';
  if (isFetchingNextPage) {
    buttonText = 'Loading...';
  } else if (hasNextPage) {
    buttonText = 'Load More';
  } else {
    buttonText = 'Nothing More to Load';
  }

  return (
    <div className={styles.PostList}>
      <section className={styles.posts} id="recentPosts">
        {data?.pages
          .flatMap((page) => page.data)
          .map((post) => (
            <PostListElement post={post} key={post._id} />
          ))}

        <div>
          <button
            type="button"
            className={`default-button ${styles.nextPageButton}`}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {buttonText}
          </button>
        </div>
      </section>
    </div>
  );
}

export default PostList;
