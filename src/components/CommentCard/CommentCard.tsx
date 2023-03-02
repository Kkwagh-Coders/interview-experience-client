import { useState } from 'react';
import { FaRegComments } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Comment } from '../../types/comment.types';
import NestedComment from '../nestedComment/nestedComment';
import styles from './CommentCard.module.css';

type Props = {
  comment: Comment;
};
function CommentCard({ comment }: Props) {
  const [isCommentExpanded, setIsCommentExpanded] = useState(false);

  const toggleComment = () => {
    setIsCommentExpanded(!isCommentExpanded);
  };
  return (
    <div className={styles.cmt}>
      <div className={styles.cmtHead}>
        {comment.userId ? (
          <Link to={`/profile/${comment.userId._id}`} className={styles.uName}>
            {comment.userId.username}
          </Link>
        ) : (
          <p className={styles.uName}>User Deleted</p>
        )}
        <p className={styles.date}>
          {new Date(comment.createdAt).toLocaleString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </p>
      </div>
      <div className={styles.cmtData}>{comment.content}</div>
      <div className={styles.cmtFoot}>
        <div className={styles.afterBtns}>
          <div className={styles.comments}>
            <div className={styles.cLogo}>
              <FaRegComments onClick={toggleComment} />
              <button
                type="button"
                onClick={toggleComment}
                className={styles.replyBtn}
              >
                reply
              </button>
            </div>
          </div>
        </div>
        {isCommentExpanded ? (
          <div className={styles.innerCmt}>
            <ul>
              <li>
                <NestedComment />
              </li>
              <li>
                <NestedComment />
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default CommentCard;
