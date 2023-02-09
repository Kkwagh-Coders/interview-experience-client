import { useAppSelector } from '../../redux/store';
import styles from './Home.module.css';

function Home() {
  const userState = useAppSelector((state) => state.userState);

  let userRole = 'Not Logged In';
  if (userState.isLoggedIn) {
    userRole = userState.user?.isAdmin ? 'Admin' : 'User';
  }

  return (
    <div className={styles.Home}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            <span>A Friendly Tool to</span>
            <span>Crack Interview</span>
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            molestiae obcaecati atque distinctio odit a aperiam? Porro eveniet
            in fugiat? Consectetur similique reiciendis eum qui eligendi quasi
            blanditiis vitae fugit!
          </p>
          <div className={styles.heroActionButtons}>
            <a
              href="#recentPosts"
              className={`default-button ${styles.exploreButton}`}
            >
              Explore
            </a>
            <a
              href="#aim"
              className={`default-button default-outline-button ${styles.aimButton}`}
            >
              Our Aim
            </a>
          </div>
        </div>
      </section>
      <h2>
        Role:
        {userRole}
      </h2>

      <section id="aim">this is mey</section>
    </div>
  );
}

export default Home;
