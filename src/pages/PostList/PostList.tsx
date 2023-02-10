import React from 'react';
import styles from './PostList.module.css';

function PostList() {
  return (
    <div className={styles.PostList}>
      <section className={styles.navbar} />
      <section className={styles.head}>
        <h1 className={styles.heading}>Top Experiences</h1>
        <div className={styles.topPosts}>
          <div className={styles.topPost1}>
            <h3> Tag1 Tag2</h3>
            <h2> Heading</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <div className={styles.postFooter}>
              <div>
                <span> Post Author</span>
                <br />
                <span> Date </span>
              </div>
              <div className={styles.postLikes}>
                <div> Like Icon</div>
                <span> 200</span>
              </div>
            </div>
            {/* <div className={styles.postButtonContainer}>
              <button type="button" className={styles.postButton}>
                READ
              </button>
            </div> */}
          </div>
          <div className={styles.topPost2}>
            <h3> Tag1 Tag2</h3>
            <h2> Heading</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <div className={styles.postFooter}>
              <div>
                <span> Post Author</span>
                <br />
                <span> Date </span>
              </div>
              <div className={styles.postLikes}>
                <div> Like Icon</div>
                <span> 200</span>
              </div>
            </div>
            {/* <div className={styles.postButtonContainer}>
              <button type="button" className={styles.postButton}>
                READ
              </button>
            </div> */}
          </div>
          <div className={styles.topPost3}>
            <h3> Tag1 Tag2</h3>
            <h2> Heading</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
            </p>
            <div className={styles.postFooter}>
              <div>
                <span> Post Author</span>
                <br />
                <span> Date </span>
              </div>
              <div className={styles.postLikes}>
                <div> Like Icon</div>
                <span> 200</span>
              </div>
            </div>
            <div className={styles.postButtonContainer}>
              <button type="button" className={styles.postButton}>
                READ
              </button>
            </div>
          </div>
        </div>
        <div className={styles.writeContainer}>
          <button className={styles.writeExperienceButton} type="button">
            {' '}
            Write Experience
          </button>
        </div>
      </section>
      <div>body</div>
    </div>
  );
}

export default PostList;
