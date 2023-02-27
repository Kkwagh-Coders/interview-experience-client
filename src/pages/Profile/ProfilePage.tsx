import { useQuery } from '@tanstack/react-query';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { useParams } from 'react-router-dom';
import ProfileTab from '../../components/ProfileTab/ProfileTab';
import { useAppSelector } from '../../redux/store';
import { getUserProfileStats } from '../../services/user.services';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const { id } = useParams();

  // Get the data related to the profile
  const profileQuery = useQuery(['profile'], () => getUserProfileStats(id));

  // Used to check if the profile belongs to the user
  const user = useAppSelector((state) => state.userState.user);
  const isEditable = user && id === user?.userId;

  // TODO: Add good loading and error elements
  if (profileQuery.isLoading) {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  if (profileQuery.isError) {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Error</h1>
      </div>
    );
  }

  // Extracting query data
  const profileData = profileQuery.data;
  const profilePostStats = profileData.postData[0];

  return (
    <div className={styles.ProfilePage}>
      <div className={styles.container}>
        <div className={styles.profileContainer}>
          <p className={`${styles.info} ${styles.fullname}`}>
            {profileData.username}
          </p>
          <p className={`${styles.info} ${styles.role}`}>
            {profileData.designation}
          </p>
          <p className={`${styles.info} ${styles.place}`}>
            {profileData.branch}
            <span> - </span>
            {profileData.passingYear}
          </p>

          <div className={styles.postsInfo}>
            <p>
              <span>{profilePostStats.postCount}</span>
              Posts
            </p>
            <p>
              <span>{profilePostStats.viewCount}</span>
              Views
            </p>
            <p>
              <span>
                {profilePostStats.upVoteCount - profilePostStats.downVoteCount}
              </span>
              Likes
            </p>
          </div>

          <p className={styles.about}>{profileData.about}</p>

          <div className={styles.socialContainer}>
            {profileData?.linkedin ? (
              <a href={profileData?.linkedin} className={styles.linkedin}>
                <FaLinkedin />
              </a>
            ) : null}

            {profileData?.github ? (
              <a href={profileData?.github} className={styles.github}>
                <DiGithubBadge />
              </a>
            ) : null}

            {profileData?.leetcode ? (
              <a href={profileData?.leetcode} className={styles.leetcode}>
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
