import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { quizTopics } from '../../assets/data/quiz.data';
import QuizListPageImage from '../../assets/images/pages/home-page.png';
import QuizQuestionForm from '../../components/QuizQuestionForm/QuizQuestionForm';
import { useAppSelector } from '../../redux/store';
import styles from './QuizList.module.css';

function QuizList() {
  const isAdmin = useAppSelector((state) => state.userState.user?.isAdmin);

  return (
    <>
      <Helmet>
        <title>Quizzes | Interview Experience</title>
        <meta
          name="description"
          content="10 min Small Quizzes to practice for Interview and also maintain consistency with Streak"
        />
        <meta name="twitter:card" content={QuizListPageImage} />
        <meta name="twitter:title" content="Quizzes | Interview Experience" />
        <meta
          name="twitter:description"
          content="10 min Small Quizzes to practice for Interview and also maintain consistency with Streak"
        />
        <meta name="twitter:image" content={QuizListPageImage} />

        <meta property="og:title" content="Quizzes | Interview Experience" />
        <meta
          property="og:description"
          content="10 min Small Quizzes to practice for Interview and also maintain consistency with Streak"
        />
        <meta property="og:image" content={QuizListPageImage} />
        <meta
          property="og:url"
          content={`${process.env.REACT_APP_BASE_CLIENT_URL}/quizzes`}
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className={styles.QuizList}>
        <div className="container">
          {isAdmin ? <QuizQuestionForm /> : null}

          <div className={styles.quizDetail}>
            <ul>
              <li>
                Practicing 5 problems each day will increase your consistency
                and confidence
              </li>
              <li>Get ready for interviews by solving daily problems!!</li>
              <li>
                Increase Streak by taking a Quiz and solving 3 or more MCQ
                questions
              </li>
            </ul>
          </div>

          <div className={styles.quizTopics}>
            {quizTopics.map((quiz) => (
              <div className={styles.quizTopic} key={quiz.topic}>
                <img
                  // eslint-disable-next-line import/no-dynamic-require, global-require
                  src={require(`../../assets/images/quizzes/${quiz.image}`)}
                  alt={quiz.description}
                  className={styles.quizImage}
                />

                <h2>{quiz.title}</h2>
                <p>{quiz.description}</p>
                <Link
                  to={`/quiz/${quiz.topic}`}
                  className={`default-button ${styles.startButton}`}
                >
                  Start
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizList;
