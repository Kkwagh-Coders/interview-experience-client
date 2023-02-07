import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useAppSelector } from '../../redux/store';
import LogoutButton from '../../components/LogoutButton/LogoutButton';

function Home() {
  const userState = useAppSelector((state) => state.userState);

  let authButtons = null;
  if (userState.isLoggedIn) {
    authButtons = (
      <>
        <h2>
          Role:
          {userState.user?.isAdmin ? 'Admin' : 'User'}
        </h2>
        <div className={styles.container}>
          <LogoutButton className="default-button">Logout</LogoutButton>
        </div>
      </>
    );
  } else {
    authButtons = (
      <div className={styles.container}>
        <Link to="/login" className="default-button">
          Login
        </Link>
        <Link to="/register" className="default-button">
          Register
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.Home}>
      <h1>Home Page</h1>
      {authButtons}
    </div>
  );
}

export default Home;
