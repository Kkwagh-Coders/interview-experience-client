import styles from './Loading.module.css';

// Page from:
function Loading() {
  return (
    <div className={styles.Loading}>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
        <div className={styles.box}>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
        <div className={styles.box}>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
        <div className={styles.box}>
          <div> </div>
          <div> </div>
          <div> </div>
          <div> </div>
        </div>
      </div>
      <div className={styles.textBox}>
        <h2 className={styles.loadingText}>Getting everything ready...</h2>
      </div>
    </div>
  );
}

export default Loading;
