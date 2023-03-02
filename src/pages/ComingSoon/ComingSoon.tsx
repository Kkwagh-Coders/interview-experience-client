import styles from './ComingSoon.module.css';
import coming from './coming.svg';

function ComingSoon() {
  return (
    <div className={styles.ComingSoon}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.title}>Event Page is Coming Soon!!!</h3>
          <p>
            We are excited to announce that we are currently in the process of
            organizing fantastic events, and we are working hard to create a
            dedicated web page that will provide you with all the information
            you need to know about the events. Thank you for your patience and
            support, and we can&apos;t wait to see you there!
          </p>

          <button className={styles.btn}>Home</button>
        </div>

        <div className={styles.image}>
          <img src={coming} alt="coming" />
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
