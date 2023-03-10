import styles from './PostSkeleton.module.css';

function PostSkeleton() {
  return (
    <div>
      <div className={styles.postsContainer}>
        <div className={styles.interviewPost}>
          <div className={`${styles.postDomain} ${styles.postSkeleton}`}> </div>
          <h3 className={`${styles.postTitle} ${styles.postSkeleton}`}> </h3>
          <p className={`${styles.postDescription} ${styles.postSkeleton}`}>
            {' '}
          </p>

          <p className={`${styles.postDescription} ${styles.postSkeleton}`}>
            {' '}
          </p>

          <div className={`${styles.userActions} `}>
            <div className={`${styles.buttons} ${styles.postSkeleton}`}> </div>
            <div className={`${styles.buttons} ${styles.postSkeleton}`}> </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostSkeleton;
