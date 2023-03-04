import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import insightIcon from '../../assets/images/home/facilities/insight.png';
import authenticIcon from '../../assets/images/home/facilities/authentic.png';
import doubtIcon from '../../assets/images/home/facilities/doubt.png';
import communityIcon from '../../assets/images/home/facilities/community.png';
import suhaanImage from '../../assets/images/home/founders/suhaan.jpg';
import aniketImage from '../../assets/images/home/founders/aniket.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';
import styles from './Home.module.css';
import TopPosts from '../../components/TopPosts/TopPosts';

function Home() {
  return (
    <div className={styles.Home}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>
            <span>A Friendly Tool to</span>
            <span className={styles.underlineSpan}>Crack Interview</span>
          </h1>
          <p>
            Get the Inside Scoop on Company Placements. Be the Pro in the Know
            with Real Interview Insights. Make Informed Decisions and Take
            Control of Your Career Journey Today!
          </p>
          <div className={styles.heroActionButtons}>
            <Link
              to="/post"
              className={`default-button ${styles.exploreButton}`}
            >
              Create Post
            </Link>
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
              <h3>Connect with Alumines</h3>
              <p>
                Build Your Network, Grow Your Connections. Get to Know Alumni
                and Expand Your Horizons.
              </p>
            </div>
            <div className={styles.facility}>
              <img src={authenticIcon} alt="" />
              <h3>Authenticity</h3>
              <p>
                Discover Authentic Interview Insights on Our Platform and Get a
                Realistic Look at Campus Placements!
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

      <section className={styles.team}>
        <div className="container">
          <div className={styles.teamContainer}>
            <h2>
              <span className={styles.underlineSpan}>Our Team</span>
            </h2>
            <div className={styles.memberContainer}>
              <div className={styles.member}>
                <div className={styles.profileImage}>
                  <img src={suhaanImage} alt="Suhaan Bhandary" />
                </div>
                <h3>
                  <a
                    href="https://www.linkedin.com/in/suhaan-bhandary/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Suhaan Bhandary
                  </a>
                </h3>
                <p>
                  Skilled Full Stack Developer proficient in React, Node, and
                  Django with expertise in DSA problem-solving, recognized as
                  Knight on Leetcode with 700+ Problems and 60+ Contests.
                </p>
              </div>
              <div className={styles.member}>
                <div className={styles.profileImage}>
                  <img src={suhaanImage} alt="Dhruv Chavda" />
                </div>
                <h3>
                  <a
                    href="https://www.linkedin.com/in/dhruv-chavda-220778238/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Dhruv Chavda
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias officiis dolore a officia. Expedita id animi accusantium
                  earum
                </p>
              </div>
              <div className={styles.member}>
                <div className={styles.profileImage}>
                  <img src={aniketImage} alt="Aniket Singh" />
                </div>
                <h3>
                  <a
                    href="https://www.linkedin.com/in/aniketsingh144/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Aniket Singh
                  </a>
                </h3>
                <p>
                  Experienced with MERN Stack, showcased coding skills on
                  Leetcode, Codechef, and Gfg. Past roles include Quality
                  Assurance and Doubt Solver Internships at InterviewHelp.io and
                  Codechef respectively
                </p>
              </div>
              <div className={styles.member}>
                <div className={styles.profileImage}>
                  <img src={suhaanImage} alt="Vinay Chopda" />
                </div>
                <h3>
                  <a
                    href="https://www.linkedin.com/in/vinay-chopda-31495a22a/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Vinay Chopda
                  </a>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias officiis dolore a officia. Expedita id animi accusantium
                  earum
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.attribution}>
        <div className="container">
          <div>
            <h2>
              <span className={styles.underlineSpan}>User Reviews</span>
            </h2>
            <div className={`attributionSlides ${styles.attributionSlides}`}>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                navigation
                modules={[Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className={styles.attributionSlide}>
                    <p className={styles.attributionText}>
                      I&apos;m a college student and recently joined Interview
                      Experience. It&apos;s been a game-changer! The platform
                      offers a wealth of interview experiences from other
                      students and professionals, giving me valuable insights
                      and helping me prepare for my own interviews. The
                      community is also fantastic - I was able to ask questions
                      and receive helpful feedback. I highly recommend this
                      website to any college student looking to ace their
                      interviews!
                    </p>
                    <div className={styles.attributerDetail}>
                      <p className={styles.attributerName}>Beta Tester</p>
                      <p className={styles.attributerDesignation}>
                        Computer Student
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.footer}>
        <div className="container">
          <div className={styles.footerContainer}>
            <div className={styles.info}>
              <h2>Interview Experience</h2>
              <p>
                Empowering KKWIEER Students for Success: Join Our Community and
                Share Your Interview Experiences. Learn from Your Peers and Get
                the Edge You Need to Ace Your Interviews.
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
  );
}

export default Home;
