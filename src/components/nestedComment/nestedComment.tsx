import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai';
import { FaRegComments } from 'react-icons/fa';
import styles from './nestedComment.module.css';

function nestedComment() {
  return (
    <>
      <div className={styles.nestedComment}>
        <div className={styles.nCmtHead}>
          <p className={styles.nUName}>shuaan1010</p>
          <p className={styles.nDate}>jan 03 2023</p>
        </div>
        <p className={styles.nestedCmtData}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, omnis.
        </p>
      </div>
      <div className={styles.nAfterBtns}>
        <div className={styles.nVotes}>
          <div className={styles.nUpVote}>
            <AiOutlineArrowUp />
          </div>
          <div className={styles.nUote}>10</div>
          <div className={styles.nDwnVote}>
            <AiOutlineArrowDown />
          </div>
        </div>
        <div className={styles.nReply}>
          <div className={styles.nRLogo}>
            <FaRegComments />
          </div>
          <div className={styles.nRText}>reply</div>
        </div>
      </div>
    </>
  );
}

export default nestedComment;
