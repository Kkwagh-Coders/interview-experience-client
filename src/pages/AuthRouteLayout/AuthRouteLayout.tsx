import { Link, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import styles from './AuthRouteLayout.module.css';

// The component is used to check if the user is logged in or not
function AuthRouteLayout() {
  const isLoggedIn = useAppSelector((state) => state.userState.isLoggedIn);

  if (isLoggedIn) return <Outlet />;

  return (
    <div className={styles.AuthRouteLayout}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h3 className={styles.title}>Login Required!!</h3>
          <p>
            To access this page, please log in using the button below. Please
            note that access requires a valid login. Thank you for using our
            website!
          </p>

          <Link to="/login" className={styles.loginButton}>
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AuthRouteLayout;
