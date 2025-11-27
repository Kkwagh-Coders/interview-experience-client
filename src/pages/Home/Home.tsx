import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import authenticIcon from '../../assets/images/home/facilities/authentic.png';
import communityIcon from '../../assets/images/home/facilities/community.png';
import doubtIcon from '../../assets/images/home/facilities/doubt.png';
import insightIcon from '../../assets/images/home/facilities/insight.png';
import homePageImage from '../../assets/images/pages/home-page.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import CompaniesListInfiniteHorizontalScroll from '../../components/CompaniesListInfiniteHorizontalScroll/CompaniesListInfiniteHorizontalScroll';
import LoginRequiredLink from '../../components/LoginRequiredLink/LoginRequiredLink';
import TopPosts from '../../components/TopPosts/TopPosts';
import styles from './Home.module.css';
import './slider.css';
import Attributions from '../../components/Attributions/Attributions';

function Home() {
  return (
    <>
      <Helmet>
        <title>Interview Experience | KKWIEER</title>
        <meta
          name="description"
          content="Get the Inside Scoop on K. K. Wagh Institute Of Engineering Education And Research[KKWIEER][kkwagh] Company Placements. Be the Pro in the Know with Real Interview Insights. Make Informed Decisions and Take Control of Your Career Journey Today!"
        />
        <meta name="twitter:card" content={homePageImage} />
        <meta name="twitter:title" content="Interview Experience | KKWIEER" />
        <meta
          name="twitter:description"
          content="Get the Inside Scoop on K. K. Wagh Institute Of Engineering Education And Research[KKWIEER][kkwagh] Company Placements. Be the Pro in the Know with Real Interview Insights. Make Informed Decisions and Take Control of Your Career Journey Today!"
        />
        <meta name="twitter:image" content={homePageImage} />

        <meta property="og:title" content="Interview Experience | KKWIEER" />
        <meta
          property="og:description"
          content="Get the Inside Scoop on K. K. Wagh Institute Of Engineering Education And Research[KKWIEER][kkwagh] Company Placements. Be the Pro in the Know with Real Interview Insights. Make Informed Decisions and Take Control of Your Career Journey Today!"
        />
        <meta property="og:image" content={homePageImage} />
        <meta
          property="og:url"
          content={`${process.env.REACT_APP_BASE_CLIENT_URL}`}
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className={styles.Home}>
        <section className={styles.hero}>
          <div className="container">
            <h1 className={styles.title}>
              <span>A Friendly Tool to</span>
              <span className={styles.underlineSpan}>Crack Interview</span>
            </h1>
            <p>
              Get the Inside Scoop on K. K. Wagh Institute Of Engineering
              Education And Research[KKWIEER] Company Placements. Be the Pro in
              the Know with Real Interview Insights. Make Informed Decisions and
              Take Control of Your Career Journey Today!
            </p>
            <div className={styles.heroActionButtons}>
              <LoginRequiredLink
                textContent="Create Post"
                to="/post"
                className={`default-button ${styles.exploreButton}`}
              />
              <Link
                to="/posts"
                className={`default-button default-outline-button ${styles.aimButton}`}
              >
                View Posts
              </Link>
            </div>
          </div>
        </section>

        <section className={styles.facilities} id="aim">
          <div className="container">
            <h2>
              <span>Be Prepared for your Next interview</span>
              <span className={styles.underlineSpan}>
                with Interview Experience
              </span>
            </h2>
            <div className={styles.facilitiesContainer}>
              <div className={styles.facility}>
                <img src={insightIcon} alt="" />
                <h3>Insights</h3>
                <p>
                  Get Real Insights, Ace Your Interviews. Discover the Power of
                  Sharing Your Experiences with Our Community.
                </p>
              </div>
              <div className={styles.facility}>
                <img src={doubtIcon} alt="" />
                <h3>Doubt Solving</h3>
                <p>
                  Get the Support You Need for Your Career Journey. Ask Your
                  Doubts, Get Feedback from Your Peers.
                </p>
              </div>
              <div className={styles.facility}>
                <img src={communityIcon} alt="" />
                <h3>Connect with Alumni</h3>
                <p>
                  Build Your Network, Grow Your Connections. Get to Know Alumni
                  and Expand Your Horizons.
                </p>
              </div>
              <div className={styles.facility}>
                <img src={authenticIcon} alt="" />
                <h3>Authenticity</h3>
                <p>
                  Discover Authentic Interview Insights on Our Platform and Get
                  a Realistic Look at Campus Placements!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.posts} id="recentPosts">
          <div className="container">
            <h2>
              <span className={styles.underlineSpan}>
                Top Interview Experiences
              </span>
            </h2>
            <TopPosts />
          </div>
        </section>

        <section className={styles.companies} id="recentPosts">
          <div className="container">
            <h2>Students Posted about</h2>
            <CompaniesListInfiniteHorizontalScroll />
          </div>
        </section>

        <Attributions />

        <section className={styles.footer}>
          <div className="container">
            <div className={styles.footerContainer}>
              <div className={styles.info}>
                <h2>Interview Experience</h2>
                <p>
                  Empowering KKWIEER Students for Success: Join Our Community
                  and Share Your Interview Experiences. Learn from Your Peers
                  and Get the Edge You Need to Ace Your Interviews.
                </p>
              </div>

              <div className={styles.links}>
                <h2>Links</h2>
                <Link to="/credits">Credits</Link>
                <a href="mailto:officialinterviewexperience@gmail.com">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.copyRight}>
          <div className="container">
            <p>Interview Experience</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
