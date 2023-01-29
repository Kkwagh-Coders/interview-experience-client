import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiEnvelope, BiLockAlt } from 'react-icons/bi';
import styles from './Login.module.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <div className={`${styles.form} ${styles.login}`}>
          <span className={styles.title}>Login</span>
          <form action="#">
            <div className={styles.inputField}>
              <input type="email" placeholder="Enter your email" required />
              <BiEnvelope className={styles.icon} />
            </div>
            <div className={styles.inputField}>
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.password}
                placeholder="Enter your password"
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
            <div className={styles.checkboxText}>
              <div className={styles.checkboxContent}>
                <label htmlFor="logCheck" className={styles.text}>
                  <input type="checkbox" id="logCheck" />
                  Remember me
                </label>
              </div>
              <Link to="/" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>
            <div className={`${styles.inputField} ${styles.button}`}>
              <input type="button" defaultValue="Login" />
            </div>
          </form>
          <div className={styles.loginSignUp}>
            <span className={styles.signUpText}>
              Not a member?
              <Link to="/register">SignUp Now</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
