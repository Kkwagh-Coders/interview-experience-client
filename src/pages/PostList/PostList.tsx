import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { postTypes } from '../../assets/data/post.data';
import PostListElement from '../../components/PostListElement/PostListElement';
import {
  getCompanyAndRoleList,
  getPostsPaginated,
} from '../../services/post.services';
import { PostCardList } from '../../types/post.types';
import postListPageImage from '../../assets/images/pages/post-list.png';
import styles from './PostList.module.css';
import PostSkeleton from '../../components/PostSkeleton/PostSkeleton';

function PostList() {
  const [filter, setFilter] = useState({
    search: '',
    sortBy: '',
    articleType: '',
    jobRole: '',
    company: '',
    rating: '',
  });

  // Fetching in Position and Companies
  const companyAndRoleQuery = useQuery({
    queryKey: ['company-role-list'],
    queryFn: () => getCompanyAndRoleList(),
  });

  // prettier-ignore
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['posts', filter],
    getNextPageParam: (prevData: {
      message: string;
      data: PostCardList;
      page: { nextPage: number; previousPage: number };
    }) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => getPostsPaginated(pageParam, 10, filter),
  });

  let scrollFooterElement = <p>Nothing More to Load</p>;
  if (isFetchingNextPage || isLoading) {
    const skeletonPost = [];
    for (let i = 0; i < 10; i += 1) {
      skeletonPost.push(i);
    }
    scrollFooterElement = (
      <div>
        {skeletonPost.map((i) => (
          <PostSkeleton key={i} />
        ))}
      </div>
    );
  }

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event: Event) => {
      if (!event.target) return;

      const target = event.target as Document;
      const scrollElement = target.scrollingElement;
      if (!scrollElement) return;
      const { scrollHeight, scrollTop, clientHeight } = scrollElement;
      const scrollHeightRemaining = scrollHeight - scrollTop;

      if (!fetching && scrollHeightRemaining <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    // console.log(document.addEventListener('scroll', onScroll));
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      <Helmet>
        <title>Posts | Interview Experience</title>
        <meta
          name="description"
          content="Search and filter posts about interview experience, discussion, doubts and many more about KKWIEER"
        />
        <meta name="twitter:card" content={postListPageImage} />
        <meta name="twitter:title" content="Posts | Interview Experience" />
        <meta
          name="twitter:description"
          content="Search and filter posts about interview experience, discussion, doubts and many more about KKWIEER"
        />
        <meta name="twitter:image" content={postListPageImage} />

        <meta property="og:title" content="Posts | Interview Experience" />
        <meta
          property="og:description"
          content="Search and filter posts about interview experience, discussion, doubts and many more about KKWIEER"
        />
        <meta property="og:image" content={postListPageImage} />
        <meta
          property="og:url"
          content={`${process.env.REACT_APP_BASE_CLIENT_URL}/posts`}
        />
        <meta property="og:type" content="website" />
      </Helmet>

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
                  placeholder="Search..."
                  onChange={(e) => {
                    setFilter({ ...filter, search: e.target.value });
                  }}
                  className={styles.searchBarInput}
                />
              </div>

              <div className={styles.filtersContainer}>
                <div className={styles.filterInput}>
                  <label htmlFor="domain">
                    <select
                      name="domain"
                      className={styles.inputField}
                      value={filter.sortBy}
                      onChange={(e) => {
                        setFilter({ ...filter, sortBy: e.target.value });
                      }}
                    >
                      <option value="">Sort By</option>
                      <option value="new">Newest</option>
                      <option value="old">Oldest</option>
                      <option value="views">Most Viewed</option>
                    </select>
                  </label>
                </div>

                <div className={styles.filterInput}>
                  <label htmlFor="type">
                    <select
                      name="type"
                      className={styles.inputField}
                      value={filter.articleType}
                      onChange={(e) => {
                        setFilter({ ...filter, articleType: e.target.value });
                      }}
                    >
                      <option value="">Post Type</option>
                      {postTypes.map((type) => (
                        <option value={type} key={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className={styles.filterInput}>
                  <label htmlFor="role">
                    <select
                      name="role"
                      className={styles.inputField}
                      value={filter.jobRole}
                      onChange={(e) => {
                        setFilter({ ...filter, jobRole: e.target.value });
                      }}
                    >
                      <option value="">Job Role</option>
                      {companyAndRoleQuery.data?.data.role.map((role) => (
                        <option value={role} key={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className={styles.filterInput}>
                  <label htmlFor="company">
                    <select
                      name="company"
                      className={styles.inputField}
                      value={filter.company}
                      onChange={(e) => {
                        setFilter({ ...filter, company: e.target.value });
                      }}
                    >
                      <option value="">Company</option>
                      {companyAndRoleQuery.data?.data.company.map((company) => (
                        <option value={company} key={company}>
                          {company}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>

                <div className={styles.filterInput}>
                  <label htmlFor="rating">
                    <select
                      name="rating"
                      className={styles.inputField}
                      value={filter.rating}
                      onChange={(e) => {
                        setFilter({ ...filter, rating: e.target.value });
                      }}
                    >
                      <option value="">Rating</option>
                      <option value="1">1 Star</option>
                      <option value="2">2 Star</option>
                      <option value="3">3 Star</option>
                      <option value="4">4 Star</option>
                      <option value="5">5 Star</option>
                    </select>
                  </label>
                </div>
              </div>
            </div>

            <div className={styles.postList}>
              {data?.pages
                .flatMap((page) => page.data)
                .map((post) => (
                  <PostListElement post={post} key={post._id} />
                ))}
            </div>
            <div className={styles.scrollFooter}>{scrollFooterElement}</div>
          </div>
        </section>
      </div>
    </>
  );
}

export default PostList;
