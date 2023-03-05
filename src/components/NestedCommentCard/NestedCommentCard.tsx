import { Link } from 'react-router-dom';
import styles from './NestedCommentCard.module.css';
import { Reply } from '../../types/comment.types';
import getFormattedDate from '../../utils/getFormattedDate';

type Props = {
  commentReply: Reply;
};
function NestedCommentCard({ commentReply }: Props) {
  return (
    <div className={styles.nestedComment}>
      <div className={styles.nCmtHead}>
        {commentReply.userId ? (
          <Link
            to={`/profile/${commentReply.userId._id}`}
            className={styles.nUName}
          >
            {commentReply.userId.username}
          </Link>
        ) : (
          <p className={styles.uName}>User Deleted</p>
        )}
        <p className={styles.nDate}>
          {getFormattedDate(commentReply.createdAt)}
        </p>
      </div>
      <p className={styles.nestedCmtData}>{commentReply.content}</p>
    </div>
  );
}

export default NestedCommentCard;
