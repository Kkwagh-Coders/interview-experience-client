import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import QuizEndScreen from '../../components/QuizEndScreen/QuizEndScreen';
import QuizGame from '../../components/QuizGame/QuizGame';
import QuizMainMenu from '../../components/QuizMainMenu/QuizMainMenu';
import { quizActions } from '../../redux/quiz/quizState';
import { useAppSelector } from '../../redux/store';
import styles from './Quiz.module.css';

function Quiz() {
  const { topic } = useParams();
  const dispatch = useDispatch();
  const gameState = useAppSelector((state) => state.quizState.gameState);

  // Used to reset the game state after the component is closed
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('Quiz Screen Loaded');

    return () => {
      dispatch(quizActions.resetState({ topic: null }));
    };
  }, [dispatch]);

  useEffect(() => {
    if (topic) {
      dispatch(quizActions.setQuizTopic({ topic }));
    }
  }, [topic, dispatch]);

  return (
    <div className={styles.Quiz}>
      <div className="container">
        {gameState === 'menu' ? <QuizMainMenu /> : null}
        {gameState === 'quiz' ? <QuizGame /> : null}
        {gameState === 'endScreen' ? <QuizEndScreen /> : null}
      </div>
    </div>
  );
}

export default Quiz;
