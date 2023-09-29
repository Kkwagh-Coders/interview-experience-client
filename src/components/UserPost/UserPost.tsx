import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getUserPostPaginated } from '../../services/post.services';
import { PostPaginated } from '../../types/post.types';
import PostListElement from '../PostListElement/PostListElement';
import PostSkeleton from '../PostSkeleton/PostSkeleton';
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
    getNextPageParam: (prevData: PostPaginated) => prevData.page.nextPage,
    queryFn: ({ pageParam = 1 }) => getUserPostPaginated(id, pageParam, 10),
  });

  let scrollFooterElement = <p>Nothing More to Load</p>;
  if (isFetchingNextPage || isLoading) {
    const skeletonPost = [];
    for (let i = 0; i < 5; i += 1) {
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
