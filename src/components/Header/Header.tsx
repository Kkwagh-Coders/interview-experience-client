import { useRef, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import DropDown from '../DropDown/DropDown';
import LogoutButton from '../LogoutButton/LogoutButton';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import styles from './Header.module.css';

function Header() {
  const isLoggedIn = useAppSelector((state) => state.userState.isLoggedIn);
  const userName = useAppSelector((state) => state.userState.user?.username);

  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleCloseNavbar = () => {
    setIsNavOpen(false);
  };

  // Navbar
  const navigationRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(navigationRef, handleCloseNavbar);

  const toggleNav = () => {
    setIsNavOpen((state) => !state);
  };

  return (
    <header className={styles.Header}>
      <div className={`container ${styles.navWrapper}`}>
        <Link to="/" className={styles.heading}>
          Interview Experience
        </Link>
        <button
          type="button"
          onClick={toggleNav}
          className={styles.mobileNavToggle}
          aria-controls="primary-navigation"
        >
          {!isNavOpen ? <RxHamburgerMenu /> : <MdOutlineClose />}
          <span className="visually-hidden">Menu</span>
        </button>

        {/* Div is used to provide backdrop shadow */}
        <div
          className={`${styles.backdrop} ${
            isNavOpen ? styles.backdropOpen : ''
          }`}
        >
          {' '}
        </div>

        <nav
          ref={navigationRef}
          className={`${styles.primaryNavigation} ${
            isNavOpen ? styles.primaryNavigationOpen : ''
          }`}
        >
          <ul className={styles.navList} id="primary-navigation">
            <li role="list" className={styles.navItem}>
              <Link to="/">Home</Link>
            </li>
            <li role="list" className={styles.navItem}>
              <Link to="/posts">Posts</Link>
            </li>
            <li role="list" className={styles.navItem}>
              <Link to="/events">Events</Link>
            </li>

            {isLoggedIn ? (
              <DropDown
                titleText={`Hi ${userName}!!`}
                className={styles.navItem}
              >
                <>
                  <li role="list" className={styles.navItem}>
                    <Link to="/profile">Profile</Link>
                  </li>
                  <LogoutButton className={styles.navItem}>Logout</LogoutButton>
                </>
              </DropDown>
            ) : null}
          </ul>
          <div className={styles.buttons}>
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className={`default-button default-outline-button ${styles.authButton}`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className={`default-button ${styles.authButton}`}
                >
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/post"
                className={`default-button ${styles.authButton}`}
              >
                Create Post
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
