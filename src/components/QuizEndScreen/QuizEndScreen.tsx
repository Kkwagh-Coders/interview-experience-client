import { useMutation } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { quizActions } from '../../redux/quiz/quizState';
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
  const dispatch = useDispatch();
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

  const handleResetQuiz = () => {
    dispatch(quizActions.resetState({ topic }));
  };

  // Calculate the quiz percentage
  const percentage = (correctAnswerCount / totalQuestionsCount) * 100;
  const canSubmit = percentage >= 60;

  return (
    <div className={styles.quizEndScreen}>
      <h2 className={styles.title}>{`${topic} Quiz Completed`}</h2>
      <p className={`${styles.score} ${canSubmit ? styles.pass : styles.fail}`}>
        {`${correctAnswerCount}/${totalQuestionsCount}`}
      </p>
      {canSubmit ? (
        <button
          type="button"
          onClick={handleResultSubmit}
          disabled={isLoading}
          className={`default-button ${styles.submitButton}`}
        >
          Submit Result
        </button>
      ) : (
        <>
          <button
            type="button"
            onClick={handleResetQuiz}
            disabled={isLoading}
            className={`default-button ${styles.resetButton}`}
          >
            Retake Quiz
          </button>
          <p>Score is below 60%, Please retake quiz to maintain streak</p>
        </>
      )}
    </div>
  );
}

export default QuizEndScreen;
