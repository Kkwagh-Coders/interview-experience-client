import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { DiGithubBadge } from 'react-icons/di';
import { FaLinkedin } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { Link, useParams } from 'react-router-dom';
import ProfileTab from '../../components/ProfileTab/ProfileTab';
import { useAppSelector } from '../../redux/store';
import { getUserProfileStats } from '../../services/user.services';
import profilePageImage from '../../assets/images/pages/profile-page.png';
import styles from './ProfilePage.module.css';

function ProfilePage() {
  const { id } = useParams();

  // Get the data related to the profile
  const profileQuery = useQuery(['profile', id], () => getUserProfileStats(id));

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
  const votes = profilePostStats.upVoteCount - profilePostStats.downVoteCount;

  return (
    <>
      <Helmet>
        <title>
          {`${profileData.username}'s Profile | Interview Experience`}
        </title>
        <meta
          name="description"
          content={`${profileData.username}'s Profile at Interview Experience. Check their posts and also view their bookmarked posts`}
        />
        <meta name="twitter:card" content={profilePageImage} />
        <meta
          name="twitter:title"
          content={`${profileData.username}'s Profile | Interview Experience`}
        />
        <meta
          name="twitter:description"
          content={`${profileData.username}'s Profile at Interview Experience. Check their posts and also view their bookmarked posts`}
        />
        <meta name="twitter:image" content={profilePageImage} />

        <meta
          property="og:title"
          content={`${profileData.username}'s Profile | Interview Experience`}
        />
        <meta
          property="og:description"
          content={`${profileData.username}'s Profile at Interview Experience. Check their posts and also view their bookmarked posts`}
        />
        <meta property="og:image" content={profilePageImage} />
        <meta
          property="og:url"
          content={`${process.env.REACT_APP_BASE_CLIENT_URL}/profile/${id}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>

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
                <span>{votes}</span>
                Likes
              </p>
            </div>

            <p className={styles.about}>{profileData.about}</p>

            <div className={styles.socialContainer}>
              {profileData?.linkedin ? (
                <a
                  href={profileData?.linkedin}
                  className={styles.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              ) : null}

              {profileData?.github ? (
                <a
                  href={profileData?.github}
                  className={styles.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <DiGithubBadge />
                </a>
              ) : null}

              {profileData?.leetcode ? (
                <a
                  href={profileData?.leetcode}
                  className={styles.leetcode}
                  target="_blank"
                  rel="noreferrer"
                >
                  <SiLeetcode />
                </a>
              ) : null}
            </div>

            {isEditable ? (
              <Link
                to="/profile/edit"
                className={`default-button ${styles.editButton}`}
              >
                Edit Profile
              </Link>
            ) : null}
          </div>

          <ProfileTab />
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
