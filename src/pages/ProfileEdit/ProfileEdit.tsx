import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import * as Yup from 'yup';

import { updateUser } from '../../services/user.services';
import { UserUpdate } from '../../types/user.types';
import styles from './ProfileEdit.module.css';
import { useAppSelector } from '../../redux/store';
import { branches } from '../../assets/data/user.data';

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

function ProfileEdit() {
  const navigate = useNavigate();

  // Get the details of the current user
  const userData = useAppSelector((state) => state.userState.user);

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  UserUpdate
  >({
    mutationFn: (user: UserUpdate) => updateUser(user),
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate(`/profile/${userData?.userId}`);
    },
  });

  const initialValues = {
    username: userData?.username || '',
    designation: userData?.designation || '',
    branch: userData?.branch || '',
    about: userData?.about || '',
    passingYear: userData?.passingYear || new Date().getFullYear(),
    github: userData?.github || '',
    linkedin: userData?.linkedin || '',
    leetcode: userData?.leetcode || '',
  };

  const formik = useFormik({
    initialValues,
    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, 'User Name must be 20 characters of less')
        .required('Username is required'),
      designation: Yup.string().required('Designation is required'),
      branch: Yup.string().required('Branch is required'),
      passingYear: Yup.number().required('Passing Year is required'),
      about: Yup.string().required('About is required'),
      github: Yup.string().url('Invalid github url'),
      linkedin: Yup.string().url('Invalid linkedin url'),
      leetcode: Yup.string().url('Invalid leetcode url'),
    }),
    onSubmit: (values) => mutate(values),
  });

  return (
    <div className={styles.ProfileEdit}>
      <div className={styles.container}>
        <header className={styles.title}>Update Profile</header>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div
            className={`${styles.inputField} ${
              formik.touched.username && formik.errors.username
                ? styles.inputFieldError
                : ''
            }`}
          >
            <label htmlFor="username">
              {formik.touched.username && formik.errors.username
                ? formik.errors.username
                : 'Username'}
              <span className="required">*</span>
              <input
                type="text"
                name="username"
                placeholder="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <div
            className={`${styles.inputField} ${
              formik.touched.designation && formik.errors.designation
                ? styles.inputFieldError
                : ''
            }`}
          >
            <label htmlFor="designation">
              {formik.touched.designation && formik.errors.designation
                ? formik.errors.designation
                : 'Designation'}
              <span className="required">*</span>
              <input
                type="text"
                name="designation"
                placeholder="SDE 1"
                value={formik.values.designation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <div
            className={`${styles.inputField} ${
              formik.touched.branch && formik.errors.branch
                ? styles.inputFieldError
                : ''
            }`}
          >
            <label htmlFor="branch">
              {formik.touched.branch && formik.errors.branch
                ? formik.errors.branch
                : 'Branch'}
              <span className="required">*</span>

              <select
                name="branch"
                className={styles.inputField}
                value={formik.values.branch}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option value="">Branch</option>
                {branches.map((branch) => (
                  <option value={branch}>{branch}</option>
                ))}
              </select>
            </label>
          </div>

          <div
            className={`${styles.inputField} ${
              formik.touched.passingYear && formik.errors.passingYear
                ? styles.inputFieldError
                : ''
            }`}
          >
            <label htmlFor="passingYear">
              {formik.touched.passingYear && formik.errors.passingYear
                ? formik.errors.passingYear
                : 'Passing Year'}
              <span className="required">*</span>
              <input
                type="number"
                name="passingYear"
                placeholder="2024"
                value={formik.values.passingYear}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <div
            className={`${styles.inputField} ${
              formik.touched.about && formik.errors.about
                ? styles.inputFieldError
                : ''
            }`}
          >
            <label htmlFor="about">
              {formik.touched.about && formik.errors.about
                ? formik.errors.about
                : 'About'}
              <span className="required">*</span>
              <textarea
                name="about"
                id="about"
                placeholder="Introduce yourself..."
                value={formik.values.about}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <div
            className={`${styles.inputField} ${
              formik.touched.github && formik.errors.github
                ? styles.inputFieldError
                : ''
            }`}
          >
            <label htmlFor="github">
              Github
              <input
                type="url"
                name="github"
                placeholder="https://github.com/user"
                value={formik.values.github ? formik.values.github : ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <div
            className={`${styles.inputField} ${
              formik.touched.linkedin && formik.errors.linkedin
                ? styles.inputFieldError
                : ''
            }`}
          >
            <label htmlFor="linkedin">
              LinkedIn
              <input
                type="url"
                name="linkedin"
                placeholder="https://linkedin.com/user"
                value={formik.values.linkedin ? formik.values.linkedin : ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <div
            className={`${styles.inputField} ${
              formik.touched.leetcode && formik.errors.leetcode
                ? styles.inputFieldError
                : ''
            }`}
          >
            <label htmlFor="leetcode">
              Leetcode
              <input
                type="url"
                name="leetcode"
                placeholder="https://leetcode.com/user"
                value={formik.values.leetcode ? formik.values.leetcode : ''}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <input
            type="submit"
            value="Update Profile"
            className={styles.updateButton}
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
}

export default ProfileEdit;
