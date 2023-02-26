import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import ProfileTab from '../../components/ProfileTab/ProfileTab';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  return (
    <div className={styles.ProfilePage}>
      <div className={styles.container}>
        <div className={styles.profileContainer}>
          <p className={`${styles.info} ${styles.fullname}`}>Suhaan Bhandary</p>
          <p className={`${styles.info} ${styles.role}`}>UX/UI Developer</p>
          <p className={`${styles.info} ${styles.place}`}>
            Computer Science 2024
          </p>

          <div className={styles.postsInfo}>
            <p>
              <span>336</span>
              Posts
            </p>
            <p>
              <span>4300</span>
              Views
            </p>
            <p>
              <span>87</span>
              Likes
            </p>
          </div>

          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              illo temporibus totam dolor provident ullam, placeat ratione.
              Possimus, illo deleniti ipsam dolore voluptatum numquam explicabo
              non quos sunt dolorum quidem!
            </p>
          </div>

          <div className={styles.socialContainer}>
            <button type="button" className={styles.linkedin}>
              <i className={`${styles.fab} ${styles.falinkedinin}`}>
                <FaLinkedin />
              </i>
            </button>
            <button type="button" className={styles.github}>
              <i className={`${styles.fab} ${styles.fagithub}`}>
                <DiGithubBadge />
              </i>
            </button>
          </div>

          <button type="button" className={styles.action}>
            Edit Profile
          </button>
        </div>

        <ProfileTab />
      </div>
    </div>
  );
}

export default ProfilePage;
