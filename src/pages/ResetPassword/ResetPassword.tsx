import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiEnvelope, BiLockAlt } from 'react-icons/bi';
import styles from './ResetPassword.module.css';

function ResetPassword() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.ResetPassword}>
      <div className={styles.container}>
        <div className={`${styles.form} ${styles.login}`}>
          <span className={styles.title}>Reset Password</span>
          <form action="#">
            <div className={styles.inputField}>
              <input type="email" placeholder="Enter your email" required />
              <BiEnvelope className={styles.icon} />
            </div>

            <div className={styles.inputField}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.password}
                placeholder="Enter New Password"
                required
              />
              <BiLockAlt className={styles.icon} />
              {showPassword ? (
                <AiOutlineEye
                  className={`${styles.icon} ${styles.eyeIcon}`}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className={`${styles.icon} ${styles.eyeIcon}`}
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>

            <div className={styles.inputField}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.password}
                placeholder="Confirm Password"
                required
              />
              <BiLockAlt className={styles.icon} />
              {showPassword ? (
                <AiOutlineEye
                  className={`${styles.icon} ${styles.eyeIcon}`}
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <AiOutlineEyeInvisible
                  className={`${styles.icon} ${styles.eyeIcon}`}
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>

            <div className={`${styles.inputField} ${styles.button}`}>
              <input type="button" value="Reset Password" />
            </div>
          </form>
          <div className={styles.loginSignUp}>
            <span className={styles.signUpText}>
              Want to login?
              <Link to="/login">LogIn</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResetPassword;
