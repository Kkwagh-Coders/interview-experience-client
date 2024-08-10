import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import attributions from '../../assets/data/attributions.data';
import styles from './Attributions.module.css';

function Attributions() {
  return (
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
              {attributions.map((attribution) => (
                <SwiperSlide>
                  <div className={styles.attributionSlide}>
                    <p className={styles.attributionText}>{attribution.text}</p>
                    <div className={styles.attributerDetail}>
                      <p className={styles.attributerName}>
                        {attribution.name}
                      </p>
                      <p className={styles.attributerDesignation}>
                        {attribution.designation}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Attributions;
