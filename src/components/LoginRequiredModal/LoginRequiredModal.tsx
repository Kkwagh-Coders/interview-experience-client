import { useRef } from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginRequiredModal.module.css';

interface Props {
  closeModalCallback: () => void;
}

function LoginRequiredModal({ closeModalCallback }: Props) {
  const backdropRef = useRef(null);

  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (event.target !== backdropRef.current) return;
    closeModalCallback();
  };

  return (
    // Todo: Remove the eslint disables properly
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/click-events-have-key-events
    <div
      role="alert"
      onClick={handleModalClick}
      className={styles.LoginRequiredModal}
      id="modalBackdrop"
      ref={backdropRef}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>Login Required</h2>
        <p className={styles.content}>
          This Content requires you to login to continue. If you don&apos;t have
          an account, you can create one by clicking the Register button on the
          navbar.
        </p>

        <div className={styles.buttons}>
          <input
            className={styles.backButton}
            onClick={closeModalCallback}
            type="button"
            value="Close"
          />

          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginRequiredModal;
