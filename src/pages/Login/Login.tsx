import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiEnvelope, BiLockAlt } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { loginUser } from '../../services/user.services';
import styles from './Login.module.css';

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

interface IUserLoginForm {
  password: string;
  email: string;
}

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  IUserLoginForm
  >({
    mutationFn: (user) => loginUser(user.email, user.password),
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: () => {
      navigate('/');
    },
  });

  const formik = useFormik({
    initialValues: {
      password: '',
      email: '',
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email Address')
        .required('Email is Required'),
      password: Yup.string()
        .max(20, 'Password must be 20 characters of less')
        .required('Password is Required'),
    }),
    onSubmit: (values) => mutate(values),
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
              <Link to="/" className={styles.forgotPassword}>
                Forgot password?
              </Link>
            </div>
            <div className={`${styles.inputField} ${styles.button}`}>
              <input type="submit" defaultValue="Login" disabled={isLoading} />
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
