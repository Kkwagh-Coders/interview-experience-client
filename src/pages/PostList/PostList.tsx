import styles from './PostList.module.css';
import PostListElement from '../../components/PostListElement/PostListElement';

function PostList() {
  return (
    <div className={styles.PostList}>
      <section className={styles.posts} id="recentPosts">
        <PostListElement />
        <PostListElement />
        <PostListElement />
        <PostListElement />
      </section>
    </div>
  );
}

export default PostList;
