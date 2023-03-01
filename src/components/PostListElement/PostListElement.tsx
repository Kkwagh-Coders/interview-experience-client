import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsBookmarkDashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from './PostListElement.module.css';

// TODO : vote , date, share, bookmark, upVote downVote
export type Props = {
  post: {
    _id: string;
    title: string;
    content: string;
    userId: {
      _id: string;
      username: string;
    };
    company: string;
    role: string;
    postType: string;
    domain: string;
    rating: number;
    status: string;
    createdAt: Date;
    isUpVoted: boolean;
    isDownVoted: boolean;
    isBookmarked: boolean;
    views: number;
    tags: string[];
  };
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
            <span className={styles.voteCount}>{}</span>
            <BiDownArrow className={`${styles.voteArrow} ${styles.downVote}`} />
          </div>

          <div className={styles.postMoreDetail}>
            <p className={styles.postAuthor}>{post.userId.username}</p>
            <span>Feb 9, 2022</span>
          </div>

          <div className={styles.bookMarkContainer}>
            <BsBookmarkDashFill className={styles.bookMark} />
          </div>
        </div>

        <div className={styles.buttons}>
          <Link to={`/post/${post._id}`} className={styles.readButton}>
            Read
          </Link>
          <button type="button" className={styles.shareButton}>
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostListElement;
