import React from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { User } from '../../types/user.types';
import registerUser from '../../services/registerUser';

import styles from './UserRegister.module.css';

function UserRegister() {
  const registerMutation = useMutation({
    mutationFn: (user: User) => registerUser(user),
    onError: () => {
      toast.error('User is already registered');
    },
    onSuccess: () => {
      toast.success('User registered');
    },
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
      designation: '',
      email: '',
      branch: '',
      passingYear: '',
      github: '',
      linkedin: '',
      leetcode: '',
    },

    validationSchema: Yup.object({
      username: Yup.string()
        .max(20, 'User Name must be 20 characters of less')
        .required(),
      password: Yup.string()
        .max(20, 'Password must be 20 characters of less')
        .required(),
      confirmPassword: Yup.string()
        .max(20, 'Password must be 20 characters of less')
        .required(),
      designation: Yup.string().required(),
      email: Yup.string().email('Invalid Email Address').required(),
      branch: Yup.string().required(),
      passingYear: Yup.number().required(),
      github: Yup.string().url('Invalid github url'),
      linkedin: Yup.string().url('Invalid linkedin url'),
      leetcode: Yup.string().url('Invalid leetcode url'),
    }),
    onSubmit: (values) => {
      const data: User = {
        username: values.username || '',
        about: '',
        password: values.password || '',
        email: values.username || '',
        designation: values.username || '',
        branch: values.username || '',
        passingYear: 0,
        github: values.username || null,
        leetcode: values.username || null,
        linkedin: values.username || null,
      };

      registerMutation.mutate(data);
    },
  });

  console.log(formik);

  return (
    <div className={styles.UserRegister}>
      <div className={styles.container}>
        <header className={styles.title}>Registration Form</header>
        <form onSubmit={formik.handleSubmit} className={styles.form}>
          <div className={styles.inputField}>
            <label htmlFor="username">
              {formik.touched.username && formik.errors.username
                ? formik.errors.username
                : 'username'}
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

          <div className={styles.column}>
            <div className={styles.inputField}>
              <label htmlFor="password">
                {formik.touched.password && formik.errors.password
                  ? formik.errors.password
                  : 'Password'}
                <span className="required">*</span>
                <input
                  type="password"
                  name="password"
                  placeholder="*****"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
            </div>

            <div className={styles.inputField}>
              <label htmlFor="password">
                {formik.touched.confirmPassword && formik.errors.confirmPassword
                  ? formik.errors.confirmPassword
                  : 'Confirm Password'}
                <span className="required">*</span>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="*****"
                  value={formik.values.confirmPassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
            </div>
          </div>
          <div className={styles.inputField}>
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

          <div className={styles.inputField}>
            <label htmlFor="email">
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : 'Email'}
              <span className="required">*</span>
              <input
                type="email"
                name="email"
                placeholder="abc@test.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="branch">
              {formik.touched.branch && formik.errors.branch
                ? formik.errors.branch
                : 'Branch'}
              <span className="required">*</span>
              <input
                type="text"
                name="branch"
                placeholder="Computer Science"
                value={formik.values.branch}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <div className={styles.inputField}>
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

          <div className={styles.inputField}>
            <label htmlFor="github">
              Github
              <input
                type="url"
                name="github"
                placeholder="https://github.com/user"
                value={formik.values.github}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="linkedIn">
              LinkedIn
              <input
                type="url"
                name="linkedIn"
                placeholder="https://linkedin.com/user"
                value={formik.values.linkedin}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="leetcode">
              Leetcode
              <input
                type="url"
                name="leetcode"
                placeholder="https://leetcode.com/user"
                value={formik.values.leetcode}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </label>
          </div>

          <input
            type="submit"
            value="Register"
            className={styles.registerButton}
          />
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
