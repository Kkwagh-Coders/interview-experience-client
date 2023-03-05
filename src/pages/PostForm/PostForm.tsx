import { useMutation, useQuery } from '@tanstack/react-query';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { PostFormData } from '../../types/post.types';

import Editor from '../../components/Editor/Editor';
import StarRating from '../../components/StarRating/StarRating';
import {
  createPost,
  getCompanyAndRoleList,
} from '../../services/post.services';
import styles from './PostForm.module.css';
import { industries, postTypes } from '../../assets/data/post.data';

interface SuccessResponse {
  message: string;
  postId: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

function PostForm() {
  const navigate = useNavigate();

  // Fetching in Position and Companies
  const companyAndRoleQuery = useQuery({
    queryKey: ['company-role-list'],
    queryFn: () => getCompanyAndRoleList(),
  });

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  PostFormData
  >({
    mutationFn: (postData: PostFormData) => createPost(postData, 'published'),
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate(`/post/${data.postId}`);
    },
  });

  const initialValues = {
    title: '',
    role: '',
    company: '',
    domain: '',
    postType: '',
    content: '',
    tags: '',
    rating: 0,
  };

  console.log(companyAndRoleQuery.data?.data);

  return (
    <div className={styles.PostForm}>
      <div className={styles.container}>
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object({
            title: Yup.string()
              .max(200, 'Title must be less than 200 characters')
              .required('Title is required'),
            role: Yup.string().required('Role is required'),
            company: Yup.string().required('Company is required'),
            domain: Yup.string().required('Domain is required'),
            postType: Yup.string().required('Post Type is required'),
            tags: Yup.string().required('Tags is required'),
            rating: Yup.number().required('Rating is required'),
          })}
          onSubmit={(values) => mutate(values)}
        >
          {(formik) => (
            <form
              onSubmit={formik.handleSubmit}
              className={styles.form}
              action=""
            >
              <header className={styles.title}>Write your post</header>

              <div
                className={`${styles.inputField} ${
                  formik.touched.title && formik.errors.title
                    ? styles.inputFieldError
                    : ''
                }`}
              >
                <label htmlFor="title">
                  Title
                  <span className="required">*</span>
                  <input
                    type="text"
                    name="title"
                    placeholder="Interview Experience at XYZ company"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
              </div>

              <div className={styles.column}>
                <div
                  className={`${styles.inputField} ${
                    formik.touched.role && formik.errors.role
                      ? styles.inputFieldError
                      : ''
                  }`}
                >
                  <label htmlFor="role">
                    Position Applied for
                    <span className="required">*</span>
                    <input
                      type="text"
                      name="role"
                      list="roles"
                      placeholder="SDE 1 or Web development Intern"
                      value={formik.values.role}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <datalist id="roles">
                      {companyAndRoleQuery.data?.data.role.map((name) => (
                        <option>{name}</option>
                      ))}
                    </datalist>
                  </label>
                </div>
                <div
                  className={`${styles.inputField} ${
                    formik.touched.company && formik.errors.company
                      ? styles.inputFieldError
                      : ''
                  }`}
                >
                  <label htmlFor="company">
                    Company
                    <span className="required">*</span>
                    <input
                      type="text"
                      placeholder="Company"
                      name="company"
                      list="companies"
                      value={formik.values.company}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    <datalist id="companies">
                      {companyAndRoleQuery.data?.data.company.map((name) => (
                        <option>{name}</option>
                      ))}
                    </datalist>
                  </label>
                </div>
              </div>

              <div className={styles.column}>
                <div
                  className={`${styles.inputField} ${
                    formik.touched.domain && formik.errors.domain
                      ? styles.inputFieldError
                      : ''
                  }`}
                >
                  <label htmlFor="domain">
                    Industry
                    <span className="required">*</span>
                    <select
                      name="domain"
                      className={styles.inputField}
                      value={formik.values.domain}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Industry</option>
                      {industries.map((industry) => (
                        <option value={industry} key={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div
                  className={`${styles.inputField} ${
                    formik.touched.postType && formik.errors.postType
                      ? styles.inputFieldError
                      : ''
                  }`}
                >
                  <label htmlFor="article">
                    Post Type
                    <span className="required">*</span>
                    <select
                      name="postType"
                      className={styles.inputField}
                      value={formik.values.postType}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="">Post Type</option>
                      {postTypes.map((type) => (
                        <option value={type} key={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              <div className={`${styles.editor} ${styles.inputField}`}>
                <Editor name="content" />
              </div>

              <div
                className={`${styles.inputField} ${
                  formik.touched.tags && formik.errors.tags
                    ? styles.inputFieldError
                    : ''
                }`}
              >
                <label htmlFor="tags">
                  Tags
                  <input
                    className={styles.tags}
                    type="text"
                    name="tags"
                    placeholder="#interview #experience #community"
                    value={formik.values.tags}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
              </div>

              <div
                className={`${styles.inputField} ${
                  formik.touched.rating && formik.errors.rating
                    ? styles.inputFieldError
                    : ''
                }`}
              >
                Rate your Interview Experience
                <StarRating name="rating" />
              </div>

              <div className={styles.column}>
                <input
                  className={styles.registerButton}
                  type="submit"
                  value="Draft"
                  disabled={isLoading}
                />
                <input
                  className={styles.registerButton}
                  type="submit"
                  value="Post"
                  disabled={isLoading}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default PostForm;
