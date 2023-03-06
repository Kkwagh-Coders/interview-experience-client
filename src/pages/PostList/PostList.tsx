import { useInfiniteQuery } from '@tanstack/react-query';
import PostListElement from '../../components/PostListElement/PostListElement';

import styles from './PostList.module.css';
import { getPostsPaginated } from '../../services/post.services';
import { PostCardList } from '../../types/post.types';

function PostList() {
  // prettier-ignore
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    getNextPageParam: (prevData: {
      message: string;
      data: PostCardList;
      page: { nextPage: number; previousPage: number };
    }) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam, 10),
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

  return (
    <div className={styles.PostList}>
      <section className={styles.posts} id="recentPosts">
        <div className="container">
          <h2>
            <span>Recent Experiences</span>
          </h2>

          <div className={styles.filter}>
            <div className={styles.searchBar}>
              <input
                type="text"
                className={styles.searchBarInput}
                placeholder="Search..."
              />
            </div>

            <div className={styles.filtersContainer}>
              <div className={styles.filterInput}>
                <label htmlFor="domain">
                  <select name="domain" className={styles.inputField}>
                    <option value="1">Sort By</option>
                    <option value="2">Newest</option>
                    <option value="3">Oldest</option>
                    <option value="4">Top Voted</option>
                  </select>
                </label>
              </div>

              <div className={styles.filterInput}>
                <label htmlFor="type">
                  <select name="type" className={styles.inputField}>
                    <option value="1">Article Type</option>
                    <option value="2">Experience</option>
                    <option value="3">Discussion</option>
                  </select>
                </label>
              </div>

              <div className={styles.filterInput}>
                <label htmlFor="domain">
                  <select name="domain" className={styles.inputField}>
                    <option value="1">Job Role</option>
                    <option value="2">Software Developer</option>
                    <option value="3">FullStack-Developer</option>
                  </select>
                </label>
              </div>

              <div className={styles.filterInput}>
                <label htmlFor="domain">
                  <select name="domain" className={styles.inputField}>
                    <option value="1">Company</option>
                    <option value="2">Amazon</option>
                    <option value="3">Google</option>
                    <option value="4">Meta</option>
                  </select>
                </label>
              </div>

              <div className={styles.filterInput}>
                <label htmlFor="domain">
                  <select name="domain" className={styles.inputField}>
                    <option value="1">Rating</option>
                    <option value="2">1 Star</option>
                    <option value="3">2 Star</option>
                    <option value="4">3 Star and above</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          {data?.pages
            .flatMap((page) => page.data)
            .map((post) => (
              <PostListElement post={post} key={post._id} />
            ))}

          <div className={styles.scrollFooter}>{scrollFooterElement}</div>
        </div>
      </section>
    </div>
  );
}

export default PostList;
