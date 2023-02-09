import React from 'react';
import styles from './PostList.module.css';

function PostList() {
  return (
    <div className={styles.PostList}>
      <div className={styles.navbar}>
        <h1> Navbar </h1>
      </div>
      <div className={styles.searchBlock}>
        <h1> Search Reviews by Designation </h1>
        <div className={styles.searchBar} />
      </div>
      <div className={styles.browseByCompany}>
        <h2> Browse Reviews By Company </h2>
      </div>
      <div className={styles.byLocation}>
        <div className={styles.block}> Top Post 1 </div>
        <div className={styles.block}> Top Post 2 </div>
        <div className={styles.block}> Top Post 3 </div>
      </div>
      <br />
      <br />
      <h1 className={styles.heading}> Recent Experiences</h1>
      <div className={styles.postList}>
        <div className={styles.postListLeft}>
          <div className={styles.postListLeftItem}>Review 1</div>
          <div className={styles.postListLeftItem}>Review 2</div>
          <div className={styles.postListLeftItem}>Review 3</div>
        </div>
        <div className={styles.postListRight}>
          <h1> Filter</h1>
        </div>
      </div>
    </div>
  );
}

export default PostList;
