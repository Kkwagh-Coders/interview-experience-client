import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { PostCard } from '../../types/post.types';
import DeleteButton from '../DeleteButton/DeleteButton';
import PostBookmarkButton from '../PostBookmarkButton/PostBookmarkButton';
import ShareButton from '../ShareButton/ShareButton';
import styles from './PostListElement.module.css';

// TODO : vote , date, share, bookmark, upVote downVote
export type Props = {
  post: PostCard;
};

function PostListElement({ post }: Props) {
  return (
    <div className={styles.postsContainer}>
      <div className={styles.interviewPost}>
        <span className={styles.postDomain}>{post.postType}</span>
        <h3 className={styles.postTitle}>
          <Link to={`/post/${post._id}`}>{post.title}</Link>
        </h3>
        <p className={styles.postDescription}>{post.content}</p>
        <div className={styles.userActions}>
          <div className={styles.voteOption}>
            <BiUpArrow className={`${styles.voteArrow} ${styles.upVote}`} />
            <span className={styles.voteCount}>{post.votes}</span>
            <BiDownArrow className={`${styles.voteArrow} ${styles.downVote}`} />
          </div>

          <div className={styles.postMoreDetail}>
            {post.userId ? (
              <Link
                to={`/profile/${post.userId._id}`}
                className={styles.postAuthor}
              >
                {post.userId.username}
              </Link>
            ) : (
              <p className={styles.postAuthor}>User Deleted</p>
            )}
            <span>
              {new Date(post.createdAt).toLocaleString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </span>
          </div>

          <div className={styles.bookMarkContainer}>
            <PostBookmarkButton
              postId={post._id}
              isBookmarked={post.isBookmarked}
            />
          </div>
        </div>

        <div className={styles.buttons}>
          <Link to={`/post/${post._id}`} className={styles.readButton}>
            Read
          </Link>
          <ShareButton
            title={post.title}
            author={post.userId?.username || 'User Deleted'}
            postId={post._id}
          />
          <DeleteButton
            postId={post._id}
            authorId={post.userId?._id || 'User Deleted'}
            postTitle={post.title}
          />
        </div>
      </div>
    </div>
  );
}

export default PostListElement;
