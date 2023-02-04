import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import { toast } from 'react-hot-toast';
import { BiEnvelope } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { sendForgotPasswordMail } from '../../services/user.services';
import styles from './ForgetPasswordModal.module.css';

interface Props {
  closeModalCallback: () => void;
}

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

function ForgetPasswordModal({ closeModalCallback }: Props) {
  const navigate = useNavigate();

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  string
  >({
    mutationFn: (email) => sendForgotPasswordMail(email),
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate('/');
    },
  });

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid Email Address')
        .required('Email is Required'),
    }),
    onSubmit: (values) => mutate(values.email),
  });

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
          <form onSubmit={formik.handleSubmit}>
            <div
              className={`${styles.inputField} ${
                formik.touched.email && formik.errors.email
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <input
                required
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              <BiEnvelope className={styles.icon} />
            </div>

            <div className={styles.buttons}>
              <input
                className={styles.backButton}
                onClick={closeModalCallback}
                type="button"
                value="Cancel"
                disabled={isLoading}
              />
              <input
                className={styles.continueButton}
                type="submit"
                value="Reset"
                disabled={isLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPasswordModal;
