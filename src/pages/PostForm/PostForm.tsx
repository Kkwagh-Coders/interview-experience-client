import Editor from '../../components/Editor/Editor';
import StarRating from '../../components/StarRating/StarRating';
import styles from './PostForm.module.css';

function PostForm() {
  return (
    <div className={styles.PostFrom}>
      <div className={styles.container}>
        <form className={styles.form} action="">
          <header className={styles.title}>Write your post</header>

          <div className={styles.inputField}>
            <label htmlFor="title">
              Title
              <span className="required">*</span>
              <input
                type="text"
                placeholder="Interview Experience at XYZ company"
              />
            </label>
          </div>

          <div className={styles.column}>
            <div className={styles.inputField}>
              <label htmlFor="domain">
                Domain
                <select name="domain" className={styles.inputField}>
                  <option value="1">Interview Experience</option>
                  <option value="2">Dsa Round</option>
                  <option value="3">Event</option>
                  <option value="4">Opportunities</option>
                  <option value="5">General Question</option>
                  <option value="6">Others</option>
                </select>
              </label>
            </div>
            <div className={styles.inputField}>
              <label htmlFor="position">
                Postion Applied for
                <select name="position" className={styles.inputField}>
                  <option value="1">Fulltime</option>
                  <option value="2">Internship</option>
                  <option value="3">Partime</option>
                  <option value="4">Freelancing</option>
                  <option value="5">Social Work</option>
                  <option value="6">Other</option>
                </select>
              </label>
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.inputField}>
              <label htmlFor="article">
                Article Type
                <select name="article" className={styles.inputField}>
                  <option value="1">Interview Experience</option>
                  <option value="2">Discussion</option>
                  <option value="3">Questions</option>
                  <option value="4">Promotional</option>
                  <option value="5">Event</option>
                  <option value="6">Others</option>
                </select>
              </label>
            </div>
            <div className={styles.inputField}>
              <label htmlFor="companyname">
                Company
                <span className="required">*</span>
                <input type="text" placeholder="Amazon" />
              </label>
            </div>
          </div>

          <div className={`${styles.inputField} ${styles.editor}`}>
            <Editor />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="tags">
              Tags
              <input
                type="text"
                name="tags"
                placeholder="#interview #experience #community"
              />
            </label>
          </div>

          <div className={styles.inputField}>
            Rate your Interview Experience
            <StarRating />
          </div>

          <div className={styles.column}>
            <input
              className={styles.registerButton}
              type="submit"
              value="Draft"
            />
            <input
              className={styles.registerButton}
              type="submit"
              value="Post"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PostForm;
