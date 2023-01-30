import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.Home}>
      <h1>Home Page</h1>
      <div className={styles.container}>
        <Link to="/login" className="default-button">
          Login
        </Link>
        <Link to="/register" className="default-button">
          Register
        </Link>
      </div>
    </div>
  );
}

export default Home;
