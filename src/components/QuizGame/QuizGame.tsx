import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Error from '../../pages/Error/Error';
import Loading from '../../pages/Loading/Loading';
import { quizActions } from '../../redux/quiz/quizState';
import { useAppSelector } from '../../redux/store';
import { getQuizQuestions } from '../../services/quiz.services';
import { QuizData } from '../../types/quiz.types';
import styles from './QuizGame.module.css';

const QUESTION_COUNT = 5;

function QuizGame() {
  const topic = useAppSelector((state) => state.quizState.topic);
  const quizState = useAppSelector((state) => state.quizState);

  const dispatch = useDispatch();

  useEffect(() => {
    const loadQuizData = async () => {
      try {
        dispatch(
          quizActions.setFetchState({
            totalQuestionsCount: QUESTION_COUNT,
          }),
        );

        // we are using ! to tell typescript that topic cannot be undefined
        const questions = await getQuizQuestions(topic!, QUESTION_COUNT);
        dispatch(quizActions.setIsQuestions({ quizQuestions: questions }));
      } catch (error) {
        dispatch(quizActions.setIsErrorTrue());
      }
    };

    if (topic) loadQuizData();
  }, [topic, dispatch]);

  if (quizState.isLoading) return <Loading />;
  if (quizState.isError) return <Error />;

  const { currentQuestion, quizQuestions } = quizState;

  let questionData: QuizData | null = null;
  if (quizQuestions) {
    questionData = quizQuestions[currentQuestion];
  }

  const handleAnswerClick = (option: string, answer: string) => {
    if (quizState.isQuestionAnswered) return;

    dispatch(
      quizActions.setIsQuestionAnsweredTrue({
        isCorrectAnswer: option === answer,
        optionSelected: option,
      }),
    );
  };

  const handleNextQuestion = () => {
    if (!quizState.isQuestionAnswered) return;
    dispatch(quizActions.incrementCurrentQuestion());
  };

  return (
    <div className={styles.quizGame}>
      <h2 className={styles.title}>{`${topic} Quiz`}</h2>
      <p className={styles.score}>
        {`
          ${currentQuestion + (quizState.isQuestionAnswered ? 1 : 0)} / 
          ${quizState.quizQuestions?.length}
        `}
      </p>
      <p className={styles.question}>{questionData?.question}</p>

      <div className={styles.options}>
        {questionData?.options.map((option) => {
          let optionClassName = '';
          const { isQuestionAnswered, optionSelected } = quizState;
          if (isQuestionAnswered && optionSelected === option) {
            if (quizState.optionSelected === questionData?.answer) {
              optionClassName = styles.correctChoice;
            } else {
              optionClassName = styles.incorrectChoice;
            }
          }

          return (
            <button
              type="button"
              key={option}
              onClick={() => handleAnswerClick(option, questionData?.answer!)}
              className={optionClassName}
              disabled={quizState.isQuestionAnswered}
            >
              {option}
            </button>
          );
        })}
      </div>

      {quizState.isQuestionAnswered ? (
        <div>
          <p className={styles.solutionTitle}>Solution</p>
          <p>{`Correct Answer: ${questionData?.answer}`}</p>
          <p className={styles.solutionDescription}>
            {questionData?.detailedSolution}
          </p>
          <div>
            <button
              type="button"
              onClick={() => handleNextQuestion()}
              className={`default-button ${styles.nextButton}`}
            >
              Next
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default QuizGame;
