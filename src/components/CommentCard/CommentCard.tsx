import { useState } from 'react';

// import { BiPencil } from 'react-icons/bi';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { BiPencil } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Comment } from '../../types/comment.types';
import styles from './CommentCard.module.css';
import CommentReply from '../CommentReply/CommentReply';
import ReplyInput from '../ReplyInput/ReplyInput';

type Props = {
  postId: string;
  comment: Comment;
};
function CommentCard({ postId, comment }: Props) {
  const [isCommentExpanded, setIsCommentExpanded] = useState(false);

  const toggleComment = () => {
    setIsCommentExpanded(!isCommentExpanded);
  };

  // prettier-ignore
  const [isReplyCommentBoxExpanded, setIsReplyCommentBoxExpanded] = useState(false);

  const toggleReplyComment = () => {
    setIsReplyCommentBoxExpanded(!isReplyCommentBoxExpanded);
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
          <div className={styles.cLogo}>
            <BiPencil onClick={toggleReplyComment} />

            <button
              type="button"
              onClick={toggleReplyComment}
              className={styles.replyBtn}
            >
              reply
            </button>
          </div>
          <div className={styles.cLogo}>
            {isCommentExpanded ? (
              <FaAngleUp onClick={toggleComment} />
            ) : (
              <FaAngleDown onClick={toggleComment} />
            )}

            <button
              type="button"
              onClick={toggleComment}
              className={styles.replyBtn}
            >
              view replies
            </button>
          </div>
        </div>
        {isReplyCommentBoxExpanded ? (
          <ReplyInput postId={postId} commentId={comment._id} />
        ) : null}
        {isCommentExpanded ? (
          <CommentReply postId={postId} commentId={comment._id} />
        ) : null}
      </div>
    </div>
  );
}

export default CommentCard;
