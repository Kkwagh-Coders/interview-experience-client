import { useDispatch } from 'react-redux';
import { quizActions } from '../../redux/quiz/quizState';
import { useAppSelector } from '../../redux/store';
import styles from './QuizMainMenu.module.css';

function QuizMainMenu() {
  const dispatch = useDispatch();
  const topic = useAppSelector((state) => state.quizState.topic);

  const handleStartQuiz = () => {
    dispatch(quizActions.setQuizState({ gameState: 'quiz' }));
  };

  return (
    <div className={styles.mainMenu}>
      <h2 className={styles.title}>{`${topic} Quiz`}</h2>
      <div>
        <p>Here are some rules of the quiz</p>
        <ul>
          <li>
            5 Problems to Solve on
            <span className={styles.topic}>{topic}</span>
          </li>
          <li>No time limit</li>
          <li>Play fair and don&apos;t cheat</li>
        </ul>
      </div>

      <button
        type="button"
        onClick={handleStartQuiz}
        className={`default-button ${styles.startQuizButton}`}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default QuizMainMenu;
