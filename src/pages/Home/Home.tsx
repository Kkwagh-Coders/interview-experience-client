import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import { useAppSelector } from '../../redux/store';
import insightIcon from '../../assets/svg/images/home/insight.png';
import personImage from '../../assets/svg/images/home/person.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slider.css';
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
            <span className={styles.underlineSpan}>Crack Interview</span>
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

      <section className={styles.facilities}>
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
              <p>Get insights of interview with the post!!</p>
            </div>
            <div className={styles.facility}>
              <img src={insightIcon} alt="" />
              <h3>Insights</h3>
              <p>Get insights of interview with the post!!</p>
            </div>
            <div className={styles.facility}>
              <img src={insightIcon} alt="" />
              <h3>Insights</h3>
              <p>Get insights of interview with the post!!</p>
            </div>
            <div className={styles.facility}>
              <img src={insightIcon} alt="" />
              <h3>Insights</h3>
              <p>Get insights of interview with the post!!</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.posts}>
        <div className="container">
          <h2>
            <span>Top </span>
            <span className={styles.underlineSpan}>Interview Experiences</span>
          </h2>

          <div className={styles.postsContainer}>
            <div className={styles.interviewPost}>
              <span className={styles.postDomain}>Experience</span>
              <h3 className={styles.postTitle}>My FinIQ Experience</h3>
              <p className={styles.postDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit
                tenetur...
              </p>
              <p className={styles.postAuthor}>Rama works</p>
              <div className={styles.postMoreDetail}>
                <span>Feb 9, 2022</span>
                <span>51 Likes</span>
              </div>
            </div>
            <div className={styles.interviewPost}>
              <span className={styles.postDomain}>Experience</span>
              <h3 className={styles.postTitle}>My FinIQ Experience</h3>
              <p className={styles.postDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit
                tenetur...
              </p>
              <p className={styles.postAuthor}>Rama works</p>
              <div className={styles.postMoreDetail}>
                <span>Feb 9, 2022</span>
                <span>51 Likes</span>
              </div>
            </div>
            <div className={styles.interviewPost}>
              <span className={styles.postDomain}>Experience</span>
              <h3 className={styles.postTitle}>My FinIQ Experience</h3>
              <p className={styles.postDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit
                tenetur...
              </p>
              <p className={styles.postAuthor}>Rama works</p>
              <div className={styles.postMoreDetail}>
                <span>Feb 9, 2022</span>
                <span>51 Likes</span>
              </div>
            </div>
          </div>
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
                  <img src={personImage} alt="Suhaan Bhandary" />
                </div>
                <h3>Suhaan Bhandary</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias officiis dolore a officia. Expedita id animi accusantium
                  earum
                </p>
              </div>
              <div className={styles.member}>
                <div className={styles.profileImage}>
                  <img src={personImage} alt="Dhruv Chavda" />
                </div>
                <h3>Dhruv Chavda</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias officiis dolore a officia. Expedita id animi accusantium
                  earum
                </p>
              </div>
              <div className={styles.member}>
                <div className={styles.profileImage}>
                  <img src={personImage} alt="Aniket" />
                </div>
                <h3>Pro Coder Aniket</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Alias officiis dolore a officia. Expedita id animi accusantium
                  earum
                </p>
              </div>
              <div className={styles.member}>
                <div className={styles.profileImage}>
                  <img src={personImage} alt="Vinay Chopda" />
                </div>
                <h3>Vinay Chopda</h3>
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
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis doloremque quasi, praesentium atque officia
                      deleniti ut enim possimus magnam labore eos repudiandae,
                      adipisci animi vitae eveniet cum perspiciatis aliquid.
                      Voluptate?
                    </p>
                    <div className={styles.attributerDetail}>
                      <p className={styles.attributerName}>Dr. Vilas</p>
                      <p className={styles.attributerDesignation}>
                        TPO Incharge
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.attributionSlide}>
                    <p className={styles.attributionText}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis doloremque quasi, praesentium atque officia
                      deleniti ut enim possimus magnam labore eos repudiandae,
                      adipisci animi vitae eveniet cum perspiciatis aliquid.
                      Voluptate?
                    </p>
                    <div className={styles.attributerDetail}>
                      <p className={styles.attributerName}>Dr. Vilas</p>
                      <p className={styles.attributerDesignation}>
                        TPO Incharge
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.attributionSlide}>
                    <p className={styles.attributionText}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis doloremque quasi, praesentium atque officia
                      deleniti ut enim possimus magnam labore eos repudiandae,
                      adipisci animi vitae eveniet cum perspiciatis aliquid.
                      Voluptate?
                    </p>
                    <div className={styles.attributerDetail}>
                      <p className={styles.attributerName}>Dr. Vilas</p>
                      <p className={styles.attributerDesignation}>
                        TPO Incharge
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.attributionSlide}>
                    <p className={styles.attributionText}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis doloremque quasi, praesentium atque officia
                      deleniti ut enim possimus magnam labore eos repudiandae,
                      adipisci animi vitae eveniet cum perspiciatis aliquid.
                      Voluptate?
                    </p>
                    <div className={styles.attributerDetail}>
                      <p className={styles.attributerName}>Dr. Vilas</p>
                      <p className={styles.attributerDesignation}>
                        TPO Incharge
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.attributionSlide}>
                    <p className={styles.attributionText}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis doloremque quasi, praesentium atque officia
                      deleniti ut enim possimus magnam labore eos repudiandae,
                      adipisci animi vitae eveniet cum perspiciatis aliquid.
                      Voluptate?
                    </p>
                    <div className={styles.attributerDetail}>
                      <p className={styles.attributerName}>Dr. Vilas</p>
                      <p className={styles.attributerDesignation}>
                        TPO Incharge
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.attributionSlide}>
                    <p className={styles.attributionText}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Facilis doloremque quasi, praesentium atque officia
                      deleniti ut enim possimus magnam labore eos repudiandae,
                      adipisci animi vitae eveniet cum perspiciatis aliquid.
                      Voluptate?
                    </p>
                    <div className={styles.attributerDetail}>
                      <p className={styles.attributerName}>Dr. Vilas</p>
                      <p className={styles.attributerDesignation}>
                        TPO Incharge
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">Footer</div>
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
