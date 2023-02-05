import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { BiEnvelope, BiLockAlt } from 'react-icons/bi';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { resetUserPassword } from '../../services/user.services';
import styles from './ResetPassword.module.css';

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

interface IUserResetPasswordForm {
  email: string;
  password: string;
  confirmPassword: string;
}

function ResetPassword() {
  const { token } = useParams();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  IUserResetPasswordForm
  >({
    mutationFn: (user) => resetUserPassword(user.email, user.password, token || ''),
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate('/login');
    },
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email Address')
        .required('Email is Required'),
      password: Yup.string()
        .max(20, 'Password must be 20 characters of less')
        .required('Password is Required'),
      confirmPassword: Yup.string()
        .when('password', {
          is: (val: string) => val && val.length > 0,
          then: Yup.string().oneOf(
            [Yup.ref('password')],
            'Confirm Password does not match',
          ),
        })
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => mutate(values),
  });

  return (
    <div className={styles.ResetPassword}>
      <div className={styles.container}>
        <div className={`${styles.form} ${styles.login}`}>
          <span className={styles.title}>Reset Password</span>
          <form onSubmit={formik.handleSubmit}>
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
                placeholder="Enter New Password"
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

            <div
              className={`${styles.inputField} ${
                formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <input
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                className={styles.password}
                placeholder="Confirm Password"
                value={formik.values.confirmPassword}
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

            <div className={`${styles.inputField} ${styles.button}`}>
              <input
                type="submit"
                value="Reset Password"
                disabled={isLoading}
              />
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
