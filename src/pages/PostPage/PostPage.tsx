import { useQuery } from '@tanstack/react-query';
import { Link, useParams } from 'react-router-dom';
import DisplayQuill from '../../components/DisplayQuill/DisplayQuill';
import { getPost } from '../../services/post.services';
import styles from './PostPage.module.css';
import ShareButton from '../../components/ShareButton/ShareButton';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import PostComments from '../../components/PostComments/PostComments';
import PostBookmarkButton from '../../components/PostBookmarkButton/PostBookmarkButton';
import { useAppSelector } from '../../redux/store';

function PostPage() {
  const { id } = useParams();
  const postQuery = useQuery({
    queryKey: ['post', id],
    queryFn: () => getPost(id),
    staleTime: 30 * 60 * 1000, // Stale time for 30min
  });

  // useAppSelector is called here because it must be called before any return
  const userId = useAppSelector((state) => state.userState.user?.userId);

  // TODO: implement loading
  if (postQuery.status === 'loading') return <h3>Loading</h3>;
  if (postQuery.status === 'error') return <h3>error</h3>;

  const authorId = postQuery.data.postAuthorId;

  const isEditable = userId === authorId;
  return (
    <div className={styles.PostPage}>
      <div className={`container ${styles.container}`}>
        <div className={styles.post}>
          <div className={styles.title}>
            <h2>{postQuery.data.title}</h2>
            <PostBookmarkButton
              postId={id || ''}
              isBookmarked={postQuery.data.isBookmarked}
            />
          </div>
          <div className={styles.postContent}>
            <div className={styles.userDetails}>
              <div className={styles.userName}>{postQuery.data.postAuthor}</div>
              <div className={styles.like}>{postQuery.data.voteCount}</div>
              <div className={styles.date}> </div>
            </div>

            <DisplayQuill content={postQuery.data.content} />

            <div>
              <ShareButton
                postId={id || ''}
                author={postQuery.data.postAuthor}
                title={postQuery.data.title}
              />

              {isEditable ? (
                <Link to={`/post/edit/${id}`} className={styles.editPostButton}>
                  Edit Post
                </Link>
              ) : null}

              <DeleteButton
                postId={id || ''}
                authorId={postQuery.data.postAuthorId}
                postTitle={postQuery.data.title}
              />
            </div>

            <div className={styles.postDetails}>
              <div className={styles.comments}>
                {`Comments ${postQuery.data.commentCount}`}
              </div>

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
            </div>

            <PostComments postId={id || ''} />
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.dataCard}>
            <ul>
              <li>
                <div className={styles.dataListItem}>
                  Comments
                  <span>{postQuery.data.commentCount}</span>
                </div>
              </li>
              <li>
                <div className={styles.dataListItem}>
                  Bookmarks
                  <span>{postQuery.data.bookmarkCount}</span>
                </div>
              </li>
              <li>
                <div className={styles.dataListItem}>
                  Views
                  <span>{postQuery.data.views}</span>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.related}>
            <p>Related Posts</p>
            <ul>
              <li>Feature in Progress...</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostPage;
