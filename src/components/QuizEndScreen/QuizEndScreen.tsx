import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import { submitQuizResult } from '../../services/quiz.services';
import { QuizSubmitData } from '../../types/quiz.types';
import styles from './QuizEndScreen.module.css';

interface SuccessResponse {
  message: string;
}

interface ErrorResponse<T> {
  response: { data: T };
}

function QuizEndScreen() {
  const navigate = useNavigate();
  const { topic, totalQuestionsCount, correctAnswerCount } = useAppSelector(
    (state) => state.quizState,
  );

  // prettier-ignore
  const { mutate, isLoading } = useMutation<
  SuccessResponse,
  ErrorResponse<{ message: string }>,
  QuizSubmitData
  >({
    mutationFn: (data) => submitQuizResult(data),
    onError: () => {
      toast.error('Quiz not Submitted, Internal Server Error');
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate('/quizzes');
    },
  });

  useEffect(() => {
    const handleSubmitQuiz = () => {};
    handleSubmitQuiz();
  }, []);

  const handleResultSubmit = () => {
    mutate({ topic, totalQuestionsCount, correctAnswerCount });
  };

  return (
    <div className={styles.quizEndScreen}>
      <h2 className={styles.title}>{`${topic} Quiz Completed`}</h2>
      <p className={styles.score}>
        {`${correctAnswerCount}/${totalQuestionsCount}`}
      </p>
      <button
        type="button"
        onClick={handleResultSubmit}
        disabled={isLoading}
        className={`default-button ${styles.submitButton}`}
      >
        Submit Result
      </button>
    </div>
  );
}

export default QuizEndScreen;
