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
            {/* <div className={styles.postButtonContainer}>
              <button type="button" className={styles.postButton}>
                READ
              </button>
            </div> */}
          </div>
        </div>
        <div className={styles.writeContainer}>
          <button className={styles.writeExperienceButton} type="button">
            {' '}
            Write Experience
          </button>
        </div>
      </section>
      <section className={styles.posts} id="recentPosts">
        <div className="container">
          <h2>
            <span>Recent Experiences </span>
          </h2>

          <div className={styles.filter}>
            <div className={styles.filterSort}>Sort By</div>
            <div className={styles.filterElement}>Job Role</div>
            <div className={styles.filterElement}>Company</div>
            <div className={styles.filterElement}>Job Type</div>
            <div className={styles.searchBar}>
              <form role="search">
                <input
                  id="search"
                  type="search"
                  placeholder="Search..."
                  required
                />
                <button type="submit">Go</button>
              </form>
            </div>
          </div>

          <div className={styles.postsContainer}>
            <div className={styles.interviewPost}>
              <div className={styles.upvote}>Upvote</div>
              <div>
                <span className={styles.postDomain}>Experience</span>
                <h3 className={styles.postTitle}>My FinIQ Experience</h3>
                <p className={styles.postDescription}>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat pariatur, quibusdam iusto officiis aliquam
                  reprehenderit tenetur...
                </p>
                <p className={styles.postAuthor}>Rama works</p>
                <div className={styles.postMoreDetail}>
                  <span>Feb 9, 2022</span>
                  <span>51 Likes</span>
                </div>
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
    </div>
  );
}

export default PostList;
