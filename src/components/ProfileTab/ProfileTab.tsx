import { useState } from 'react';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import { BsBookmarkDashFill } from 'react-icons/bs';
import styles from './ProfileTab.module.css';

function ProfileTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className={styles.ProfileTab}>
      <div className={styles.blockTabs}>
        <button
          type="button"
          className={
            toggleState === 1
              ? `${styles.tabs} ${styles.activeTab}`
              : `${styles.tabs}`
          }
          onClick={() => toggleTab(1)}
        >
          <h3>Posts</h3>
        </button>
        <button
          type="button"
          className={
            toggleState === 2
              ? `${styles.tabs} ${styles.activeTab}`
              : `${styles.tabs}`
          }
          onClick={() => toggleTab(2)}
        >
          <h3>Bookmarks</h3>
        </button>
      </div>

      <div className={styles.contentTabs}>
        <div
          className={
            toggleState === 1
              ? `${styles.content} ${styles.activeContent}`
              : `${styles.content}`
          }
        >
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

        <div
          className={
            toggleState === 2
              ? `${styles.content} ${styles.activeContent}`
              : `${styles.content}`
          }
        >
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
      </div>
    </div>
  );
}

export default ProfileTab;
