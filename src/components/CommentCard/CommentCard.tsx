import { useState } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { BiPencil } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Comment } from '../../types/comment.types';
import getFormattedDate from '../../utils/getFormattedDate';
import CommentReply from '../CommentReply/CommentReply';
import ReplyInput from '../ReplyInput/ReplyInput';
import styles from './CommentCard.module.css';
import DeleteCommentButton from '../DeleteCommentButton/DeleteCommentButton';

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
        <p className={styles.date}>{getFormattedDate(comment.createdAt)}</p>
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
          <DeleteCommentButton
            postId={postId}
            commentId={comment._id}
            authorId={comment.userId?._id || 'User Deleted'}
          />
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
