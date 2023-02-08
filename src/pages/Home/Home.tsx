import styles from './Home.module.css';
import { useAppSelector } from '../../redux/store';

function Home() {
  const userState = useAppSelector((state) => state.userState);

  let userRole = 'Not Logged In';
  if (userState.isLoggedIn) {
    userRole = userState.user?.isAdmin ? 'Admin' : 'User';
  }

  return (
    <div className={styles.Home}>
      <h1>Home Page</h1>
      <h2>
        Role:
        {userRole}
      </h2>
    </div>
  );
}

export default Home;
