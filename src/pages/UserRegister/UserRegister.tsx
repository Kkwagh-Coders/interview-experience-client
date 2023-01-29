import React from 'react';
import styles from './UserRegister.module.css';

function UserRegister() {
  return (
    <div className={styles.UserRegister}>
      <div className={styles.container}>
        <header>Registration Form</header>
        <form className={styles.form}>
          <div className={styles.inputField}>
            <label htmlFor="userName">
              Username
              <span className="required">*</span>
              <input
                type="text"
                name="userName"
                placeholder="username"
                required
              />
            </label>
          </div>

          <div className={styles.column}>
            <div className={styles.inputField}>
              <label htmlFor="password">
                Password
                <span className="required">*</span>
                <input
                  type="password"
                  name="password"
                  placeholder="*****"
                  required
                />
              </label>
            </div>

            <div className={styles.inputField}>
              <label htmlFor="password">
                Confirm Password
                <span className="required">*</span>
                <input
                  type="password"
                  name="password"
                  placeholder="*****"
                  required
                />
              </label>
            </div>
          </div>
          <div className={styles.inputField}>
            <label htmlFor="designation">
              Designation
              <span className="required">*</span>
              <input
                type="text"
                name="designation"
                placeholder="SDE 1"
                required
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="email">
              Email
              <span className="required">*</span>
              <input
                type="email"
                name="email"
                placeholder="abc@test.com"
                required
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="branch">
              Branch
              <span className="required">*</span>
              <input
                type="text"
                name="branch"
                placeholder="Computer Science"
                required
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="passingYear">
              Passing Year
              <span className="required">*</span>
              <input
                type="number"
                name="passingYear"
                placeholder="2024"
                required
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="github">
              Github
              <input
                type="url"
                name="github"
                placeholder="https://github.com/user"
                required
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="linkedIn">
              LinkedIn
              <input
                type="url"
                name="linkedIn"
                placeholder="https://linkedin.com/user"
                required
              />
            </label>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="leetcode">
              Leetcode
              <input
                type="url"
                name="leetcode"
                placeholder="https://leetcode.com/user"
                required
              />
            </label>
          </div>

          <input
            type="button"
            value="Submit"
            className={styles.registerButton}
          />
        </form>
      </div>
    </div>
  );
}

export default UserRegister;
