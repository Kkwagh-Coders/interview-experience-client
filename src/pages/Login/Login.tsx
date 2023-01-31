import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiEnvelope, BiLockAlt } from 'react-icons/bi';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import styles from './Login.module.css';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
      remember: [],
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email Address')
        .required('Email is Required'),
      password: Yup.string()
        .max(20, 'Password must be 20 characters of less')
        .required('Password is Required'),
      remember: Yup.array(),
    }),

    onSubmit: (values) => {
      const rememberUser = values.remember.length > 0;
      console.log(rememberUser);
    },
  });

  return (
    <div className={styles.Login}>
      <div className={styles.container}>
        <div className={`${styles.form} ${styles.login}`}>
          <span className={styles.title}>Login</span>
          <form action="#" onSubmit={formik.handleSubmit}>
            <div
              className={`${styles.inputField} ${
                formik.touched.email && formik.errors.email
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <BiEnvelope className={styles.icon} />
            </div>
            <div
              className={`${styles.inputField} ${
                formik.touched.password && formik.errors.password
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <input
                type={showPassword ? 'text' : 'password'}
                className={styles.password}
                placeholder="Enter your password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                <label htmlFor="remember" className={styles.text}>
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    value="checked"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  Remember me
                </label>
              </div>
              <Link to="/" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>
            <div className={`${styles.inputField} ${styles.button}`}>
              <input type="submit" defaultValue="Login" />
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
