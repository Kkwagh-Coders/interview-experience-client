import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className={styles.NotFound}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Hmm.</h1>
        <p>
          It seems that you re lost in a perpetual black hole. Let us help guide
          you out and get you back home.
        </p>
        <div className={styles.buttons}>
          <button
            type="button"
            className={styles.linkBtn}
            onClick={() => navigate(-1)}
          >
            back
          </button>
          <Link className={styles.linkBtn} to="/">
            Home
          </Link>
          <br />
          <span>Help me out</span>
        </div>
      </div>
      <div className={styles.space}>
        <div className={styles.blackhole}> </div>
        <div className={styles.ship}> </div>
      </div>
    </div>
  );
}

export default NotFound;
