import styles from './RegisterSuccessModal.module.css';

function RegisterSuccessModal() {
  return (
    <div className={styles.RegisterSuccessModal}>
      <div className={styles.container}>
        <h1 className={styles.title}>Please Verify your Email</h1>
        <p>
          Your account has been successfully registered, you may now close this
          tab. A mail has been sent to your email address, click on the verify
          button to verify your email address, and you will be able to log in
          using your email address and password.
        </p>
      </div>
    </div>
  );
}

export default RegisterSuccessModal;
