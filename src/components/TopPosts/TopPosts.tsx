import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getMostViewedPosts } from '../../services/post.services';
import getFormattedDate from '../../utils/getFormattedDate';
import styles from './TopPosts.module.css';

function TopPosts() {
  const { data, isLoading } = useQuery({
    queryKey: ['most-viewed-posts'],
    queryFn: () => getMostViewedPosts(5),
  });

  if (isLoading) {
    return <p className={styles.loadingText}>Loading...</p>;
  }

  return (
    <div className={styles.postsContainer}>
      {data?.data?.map((post) => (
        <div className={styles.interviewPost} key={post._id}>
          <span className={styles.postDomain}>{post.postType}</span>
          <h3 className={styles.postTitle}>
            <Link to={`/post/${post._id}`}>{post.title}</Link>
          </h3>
          <p className={styles.postDescription}>{post.content}</p>
          <p className={styles.postAuthor}>
            {post.userId ? (
              <Link
                to={`/profile/${post.userId?._id}`}
                className={styles.postAuthor}
              >
                {post.userId?.username}
              </Link>
            ) : (
              'User Deleted'
            )}
          </p>
          <div className={styles.postMoreDetail}>
            <span>{getFormattedDate(post.createdAt)}</span>
            <span>
              {post.votes}
              {' Likes'}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopPosts;
