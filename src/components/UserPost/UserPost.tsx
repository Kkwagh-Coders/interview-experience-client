import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getUserPostPaginated } from '../../services/post.services';
import { PostCardList } from '../../types/post.types';
import PostListElement from '../PostListElement/PostListElement';
import styles from './UserPost.module.css';

function UserPost() {
  const { id } = useParams();

  // prettier-ignore
  const {
    data,
    isLoading,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery({
    queryKey: ['user-post', id],
    getNextPageParam: (prevData: {
      message: string;
      data: PostCardList;
      page: { nextPage: number; previousPage: number };
    }) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => getUserPostPaginated(id, pageParam, 10),
  });

  let scrollFooterElement = <p>Nothing More to Load</p>;
  if (isFetchingNextPage || isLoading) {
    scrollFooterElement = <p>Loading...</p>;
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

  const isEmpty = data?.pages[0].data.length === 0;
  return (
    <div className={styles.UserPost}>
      {isEmpty ? <p>No User Post</p> : null}
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
    </div>
  );
}

export default UserPost;
