import { BiEnvelope } from 'react-icons/bi';
import styles from './ForgetPasswordModal.module.css';

interface Props {
  closeModalCallback: () => void;
}

function ForgetPasswordModal({ closeModalCallback }: Props) {
  return (
    <div className={styles.ForgetPasswordModal}>
      <div className={styles.container}>
        <div className={`${styles.form} ${styles.login}`}>
          <div className={styles.title}>
            <h1>Forget your Password ???</h1>
          </div>

          <div className={styles.body}>
            <p>
              That&apos;s okay, Enter your registered Email ID and click on the
              Reset to get a mail to reset password !!!
            </p>
          </div>
          <form action="">
            <div className={styles.inputField}>
              <input type="email" placeholder="Enter your email" required />
              <BiEnvelope className={styles.icon} />
            </div>
          </form>

          <div className={styles.buttons}>
            <input
              className={styles.backButton}
              onClick={closeModalCallback}
              type="button"
              defaultValue="Cancel"
            />
            <input
              className={styles.continueButton}
              type="button"
              defaultValue="Reset"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordModal;
