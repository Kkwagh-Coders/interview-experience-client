import React, { useState } from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import NestedComment from '../nestedComment/nestedComment';
import styles from './Comment.module.css';

function Comment() {
  const [isCommentExpanded, setIsCommentExpanded] = useState(false);

  const toggleComment = () => {
    setIsCommentExpanded(!isCommentExpanded);
  };
  return (
    <div className={styles.cmt}>
      <div className={styles.cmtHead}>
        <p className={styles.uName}>shuaan1010</p>
        <p className={styles.date}>jan 03 2023</p>
      </div>
      <div className={styles.cmtData}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quos,
        consequatur suscipit at illum in ea. Tempore animi facilis
        reprehenderit.
      </div>
      <div className={styles.cmtFoot}>
        <div className={styles.afterBtns}>
          <div className={styles.votes}>
            <div className={styles.upVote}>
              <AiOutlineArrowUp />
            </div>
            <div className={styles.vote}>10</div>
            <div className={styles.dwnVote}>
              <AiOutlineArrowDown />
            </div>
          </div>
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

export default Comment;
