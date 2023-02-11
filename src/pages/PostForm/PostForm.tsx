import Editor from '../../components/Editor/Editor';
import StarRating from '../../components/StarRating/StarRating';
import styles from './PostForm.module.css';

function PostForm() {
  return (
    <div className={styles.PostForm}>
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
              <label htmlFor="position">
                Postion Applied for
                <span className="required">*</span>
                <input
                  type="text"
                  placeholder="SDE 1 or Web development Intern"
                />
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

          <div className={styles.column}>
            <div className={styles.inputField}>
              <label htmlFor="domain">
                Industry
                <select name="domain" className={styles.inputField}>
                  <option value="1">IT Industry</option>
                  <option value="2">Chemical Industry</option>
                  <option value="3">Automobile Industry</option>
                  <option value="4">Others</option>
                </select>
              </label>
            </div>
            <div className={styles.inputField}>
              <label htmlFor="article">
                Article Type
                <select name="article" className={styles.inputField}>
                  <option value="1">Interview Experience</option>
                  <option value="2">Discussion</option>
                  <option value="3">Promotional</option>
                  <option value="4">Event</option>
                  <option value="5">Others</option>
                </select>
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
                className={styles.tags}
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
