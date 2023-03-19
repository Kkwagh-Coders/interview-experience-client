import { useMutation } from '@tanstack/react-query';
import { Formik } from 'formik';
import { toast } from 'react-hot-toast';
import * as Yup from 'yup';
import { quizTopicList } from '../../assets/data/quiz.data';
import { createQuizQuestion } from '../../services/quiz.services';
import { QuizFormData } from '../../types/quiz.types';
import styles from './QuizQuestionForm.module.css';

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

function QuizQuestionForm() {
  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  QuizFormData
  >({
    mutationFn: (data: QuizFormData) => createQuizQuestion(data),
    onError: (error) => {
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
    },
  });

  const initialValues = {
    topic: '',
    question: '',
    answer: '',
    detailedSolution: '',
    wrongOption1: '',
    wrongOption2: '',
    wrongOption3: '',
    difficulty: 5, // Out of 10
  };

  return (
    <div className={styles.QuizQuestionForm}>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          topic: Yup.string()
            .max(50, 'Topic must be less than 50 characters')
            .required('Topic is required'),
          question: Yup.string()
            .max(200, 'Question must be less than 200 characters')
            .required('Question is required'),
          answer: Yup.string()
            .max(50, 'Answer must be less than 50 characters')
            .required('Answer is required'),
          detailedSolution: Yup.string()
            .max(200, 'Detailed Solution must be less than 200 characters')
            .required('Detailed Solution is required'),
          wrongOption1: Yup.string()
            .max(50, 'wrongOption1 must be less than 50 characters')
            .required('wrongOption1 is required'),
          wrongOption2: Yup.string()
            .max(50, 'wrongOption2 must be less than 50 characters')
            .required('wrongOption2 is required'),
          wrongOption3: Yup.string()
            .max(50, 'wrongOption3 must be less than 50 characters')
            .required('wrongOption3 is required'),
          difficulty: Yup.number()
            .max(10, 'Difficulty should be in range 1 to 10')
            .min(1, 'Difficulty should be in range 1 to 10')
            .required('Difficulty is required'),
        })}
        onSubmit={(values) => mutate(values)}
      >
        {(formik) => (
          <form onSubmit={formik.handleSubmit} className={styles.form}>
            <h2 className={styles.title}>Create Quiz Question</h2>

            <div
              className={`${styles.inputField} ${
                formik.touched.topic && formik.errors.topic
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <label htmlFor="topic">
                {formik.touched.topic && formik.errors.topic
                  ? formik.errors.topic
                  : 'Topic'}
                <span className="required">*</span>

                <select
                  name="topic"
                  className={styles.inputField}
                  value={formik.values.topic}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="">Topic</option>
                  {quizTopicList.map((topic) => (
                    <option value={topic} key={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div
              className={`${styles.inputField} ${
                formik.touched.question && formik.errors.question
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <label htmlFor="question">
                {formik.touched.question && formik.errors.question
                  ? formik.errors.question
                  : 'Question'}
                <span className="required">*</span>
                <input
                  type="text"
                  name="question"
                  placeholder="Question"
                  value={formik.values.question}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
            </div>
            <div className={styles.options}>
              <div
                className={`${styles.inputField} ${
                  formik.touched.answer && formik.errors.answer
                    ? styles.inputFieldError
                    : ''
                }`}
              >
                <label htmlFor="answer">
                  {formik.touched.answer && formik.errors.answer
                    ? formik.errors.answer
                    : 'Answer'}
                  <span className="required">*</span>
                  <input
                    type="text"
                    name="answer"
                    placeholder="answer"
                    value={formik.values.answer}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
              </div>

              <div
                className={`${styles.inputField} ${
                  formik.touched.wrongOption1 && formik.errors.wrongOption1
                    ? styles.inputFieldError
                    : ''
                }`}
              >
                <label htmlFor="wrongOption1">
                  {formik.touched.wrongOption1 && formik.errors.wrongOption1
                    ? formik.errors.wrongOption1
                    : 'Wrong Option 1'}
                  <span className="required">*</span>
                  <input
                    type="text"
                    name="wrongOption1"
                    placeholder="wrongOption1"
                    value={formik.values.wrongOption1}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
              </div>

              <div
                className={`${styles.inputField} ${
                  formik.touched.wrongOption2 && formik.errors.wrongOption2
                    ? styles.inputFieldError
                    : ''
                }`}
              >
                <label htmlFor="wrongOption2">
                  {formik.touched.wrongOption2 && formik.errors.wrongOption2
                    ? formik.errors.wrongOption2
                    : 'Wrong Option 2'}
                  <span className="required">*</span>
                  <input
                    type="text"
                    name="wrongOption2"
                    placeholder="wrongOption2"
                    value={formik.values.wrongOption2}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
              </div>

              <div
                className={`${styles.inputField} ${
                  formik.touched.wrongOption3 && formik.errors.wrongOption3
                    ? styles.inputFieldError
                    : ''
                }`}
              >
                <label htmlFor="wrongOption3">
                  {formik.touched.wrongOption3 && formik.errors.wrongOption3
                    ? formik.errors.wrongOption3
                    : 'Wrong Option 3'}
                  <span className="required">*</span>
                  <input
                    type="text"
                    name="wrongOption3"
                    placeholder="wrongOption3"
                    value={formik.values.wrongOption3}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </label>
              </div>
            </div>

            <div
              className={`${styles.inputField} ${
                // prettier-ignore
                formik.touched.detailedSolution && formik.errors.detailedSolution
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <label htmlFor="detailedSolution">
                {
                  // prettier-ignore
                  formik.touched.detailedSolution && formik.errors.detailedSolution
                    ? formik.errors.detailedSolution
                    : 'Detailed Solution'
                }
                <span className="required">*</span>
                <textarea
                  name="detailedSolution"
                  placeholder="Detailed Solution"
                  value={formik.values.detailedSolution}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
            </div>

            <div
              className={`${styles.inputField} ${
                formik.touched.difficulty && formik.errors.difficulty
                  ? styles.inputFieldError
                  : ''
              }`}
            >
              <label htmlFor="difficulty">
                {formik.touched.difficulty && formik.errors.difficulty
                  ? formik.errors.difficulty
                  : 'Difficulty Level'}
                <span className="required">*</span>
                <input
                  type="number"
                  min={1}
                  max={10}
                  name="difficulty"
                  placeholder="difficulty"
                  value={formik.values.difficulty}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
              </label>
            </div>

            <div className={styles.column}>
              <input
                className={styles.registerButton}
                type="submit"
                value="Create Question"
                disabled={isLoading}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default QuizQuestionForm;
