import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useParams } from 'react-router-dom';
import ProfileTab from '../../components/ProfileTab/ProfileTab';
import { useAppSelector } from '../../redux/store';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const { id } = useParams();

  // !Get user data from id
  // TODO: For now we are using the status data
  const user = useAppSelector((state) => state.userState.user);
  const isEditable = user && id === user?.userId;

  // TODO: The below id will be used to fetch the user profile data
  console.log(id);

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

          <p className={styles.about}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio illo
            temporibus totam dolor provident ullam, placeat ratione. Possimus,
            illo deleniti ipsam dolore voluptatum numquam explicabo non quos
            sunt dolorum quidem!
          </p>

          <div className={styles.socialContainer}>
            {user?.linkedin ? (
              <a href={user?.linkedin} className={styles.linkedin}>
                <FaLinkedin />
              </a>
            ) : null}

            {user?.github ? (
              <a href={user?.github} className={styles.github}>
                <DiGithubBadge />
              </a>
            ) : null}

            {user?.leetcode ? (
              <a href={user?.leetcode} className={styles.leetcode}>
                <SiLeetcode />
              </a>
            ) : null}
          </div>

          {isEditable ? (
            <button
              type="button"
              className={`default-button ${styles.editButton}`}
            >
              Edit Profile
            </button>
          ) : null}
        </div>

        <ProfileTab />
      </div>
    </div>
  );
}

export default ProfilePage;
