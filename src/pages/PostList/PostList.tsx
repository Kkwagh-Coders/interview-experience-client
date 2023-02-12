import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsBookmarkDashFill } from 'react-icons/bs';
import styles from './PostList.module.css';

function PostList() {
  return (
    <div className={styles.PostList}>
      <section className={styles.posts} id="recentPosts">
        <div className="container">
          <h2>
            <span>Recent Experiences</span>
          </h2>

          <div className={styles.filter}>
            <div className={styles.searchBar}>
              <input
                type="text"
                className={styles.searchBarInput}
                placeholder="Search..."
              />
            </div>

            <div className={styles.filtersContainer}>
              <div className={styles.filterInput}>
                <label htmlFor="domain">
                  <select name="domain" className={styles.inputField}>
                    <option value="1">Sort By</option>
                    <option value="2">Newest</option>
                    <option value="3">Oldest</option>
                    <option value="4">Top Voted</option>
                  </select>
                </label>
              </div>

              <div className={styles.filterInput}>
                <label htmlFor="type">
                  <select name="type" className={styles.inputField}>
                    <option value="1">Article Type</option>
                    <option value="2">Experience</option>
                    <option value="3">Discussion</option>
                  </select>
                </label>
              </div>

              <div className={styles.filterInput}>
                <label htmlFor="domain">
                  <select name="domain" className={styles.inputField}>
                    <option value="1">Job Role</option>
                    <option value="2">Software Developer</option>
                    <option value="3">FullStack-Developer</option>
                  </select>
                </label>
              </div>

              <div className={styles.filterInput}>
                <label htmlFor="domain">
                  <select name="domain" className={styles.inputField}>
                    <option value="1">Company</option>
                    <option value="2">Amazon</option>
                    <option value="3">Google</option>
                    <option value="4">Meta</option>
                  </select>
                </label>
              </div>

              <div className={styles.filterInput}>
                <label htmlFor="domain">
                  <select name="domain" className={styles.inputField}>
                    <option value="1">Rating</option>
                    <option value="2">1 Star</option>
                    <option value="3">2 Star</option>
                    <option value="4">3 Star and above</option>
                  </select>
                </label>
              </div>
            </div>
          </div>

          <div className={styles.postsContainer}>
            <div className={styles.interviewPost}>
              <span className={styles.postDomain}>Experience</span>
              <h3 className={styles.postTitle}>My FinIQ Experience</h3>
              <p className={styles.postDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit tenetur
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit
                tenetur...
              </p>
              <div className={styles.userActions}>
                <div className={styles.voteOption}>
                  <BiUpArrow
                    className={`${styles.voteArrow} ${styles.upVote}`}
                  />
                  <span className={styles.voteCount}>100</span>
                  <BiDownArrow
                    className={`${styles.voteArrow} ${styles.downVote}`}
                  />
                </div>

                <div className={styles.postMoreDetail}>
                  <p className={styles.postAuthor}>Rama works</p>
                  <span>Feb 9, 2022</span>
                </div>

                <div className={styles.bookMarkContainer}>
                  <BsBookmarkDashFill className={styles.bookMark} />
                </div>
              </div>

              <div className={styles.buttons}>
                <button type="button" className={styles.readButton}>
                  Read
                </button>
                <button type="button" className={styles.shareButton}>
                  Share
                </button>
              </div>
            </div>
          </div>

          <div className={styles.postsContainer}>
            <div className={styles.interviewPost}>
              <span className={styles.postDomain}>Experience</span>
              <h3 className={styles.postTitle}>My FinIQ Experience</h3>
              <p className={styles.postDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit tenetur
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit
                tenetur...
              </p>
              <div className={styles.userActions}>
                <div className={styles.voteOption}>
                  <BiUpArrow
                    className={`${styles.voteArrow} ${styles.upVote}`}
                  />
                  <span className={styles.voteCount}>100</span>
                  <BiDownArrow
                    className={`${styles.voteArrow} ${styles.downVote}`}
                  />
                </div>

                <div className={styles.postMoreDetail}>
                  <p className={styles.postAuthor}>Rama works</p>
                  <span>Feb 9, 2022</span>
                </div>

                <div className={styles.bookMarkContainer}>
                  <BsBookmarkDashFill className={styles.bookMark} />
                </div>
              </div>

              <div className={styles.buttons}>
                <button type="button" className={styles.readButton}>
                  Read
                </button>
                <button type="button" className={styles.shareButton}>
                  Share
                </button>
              </div>
            </div>
          </div>

          <div className={styles.postsContainer}>
            <div className={styles.interviewPost}>
              <span className={styles.postDomain}>Experience</span>
              <h3 className={styles.postTitle}>My FinIQ Experience</h3>
              <p className={styles.postDescription}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit tenetur
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
                pariatur, quibusdam iusto officiis aliquam reprehenderit
                tenetur...
              </p>
              <div className={styles.userActions}>
                <div className={styles.voteOption}>
                  <BiUpArrow
                    className={`${styles.voteArrow} ${styles.upVote}`}
                  />
                  <span className={styles.voteCount}>100</span>
                  <BiDownArrow
                    className={`${styles.voteArrow} ${styles.downVote}`}
                  />
                </div>

                <div className={styles.postMoreDetail}>
                  <p className={styles.postAuthor}>Rama works</p>
                  <span>Feb 9, 2022</span>
                </div>

                <div className={styles.bookMarkContainer}>
                  <BsBookmarkDashFill className={styles.bookMark} />
                </div>
              </div>

              <div className={styles.buttons}>
                <button type="button" className={styles.readButton}>
                  Read
                </button>
                <button type="button" className={styles.shareButton}>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostList;
