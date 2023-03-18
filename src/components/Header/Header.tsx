import { useRef, useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';
import DropDown from '../DropDown/DropDown';
import LogoutButton from '../LogoutButton/LogoutButton';
import useOutsideAlerter from '../../hooks/useOutsideAlerter';
import styles from './Header.module.css';
import CustomNavLink from '../CustomNavLink/CustomNavLink';

function Header() {
  const isLoggedIn = useAppSelector((state) => state.userState.isLoggedIn);
  const user = useAppSelector((state) => state.userState.user);

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
            <CustomNavLink
              path="/"
              onClickCallback={handleCloseNavbar}
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Home
            </CustomNavLink>
            <CustomNavLink
              path="/posts"
              onClickCallback={handleCloseNavbar}
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Posts
            </CustomNavLink>
            <CustomNavLink
              path="/quizzes"
              onClickCallback={handleCloseNavbar}
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Quizzes
            </CustomNavLink>
            <CustomNavLink
              path="/user/search"
              onClickCallback={handleCloseNavbar}
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Users
            </CustomNavLink>
            <CustomNavLink
              path="/events"
              onClickCallback={handleCloseNavbar}
              className={styles.navItem}
              activeClassName={styles.navItemActive}
            >
              Events
            </CustomNavLink>

            {isLoggedIn ? (
              <DropDown
                titleText={`Hi ${user?.username}!!`}
                className={styles.navItem}
              >
                <>
                  <CustomNavLink
                    path={`/profile/${user?.userId}`}
                    onClickCallback={handleCloseNavbar}
                    className={styles.navItem}
                    activeClassName={styles.navItemActive}
                  >
                    Profile
                  </CustomNavLink>
                  <LogoutButton
                    className={styles.navItem}
                    onClickCallback={handleCloseNavbar}
                  >
                    Logout
                  </LogoutButton>
                </>
              </DropDown>
            ) : null}
          </ul>
          <div className={styles.buttons}>
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  onClick={handleCloseNavbar}
                  className={`default-button default-outline-button ${styles.authButton}`}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={handleCloseNavbar}
                  className={`default-button ${styles.authButton}`}
                >
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/post"
                onClick={handleCloseNavbar}
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
