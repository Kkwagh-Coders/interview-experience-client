import { useParams } from 'react-router-dom';
import styles from './Quiz.module.css';

function Quiz() {
  const { topic } = useParams();

  return (
    <div className={styles.Quiz}>
      <div className="container">{topic}</div>
    </div>
  );
}

export default Quiz;
