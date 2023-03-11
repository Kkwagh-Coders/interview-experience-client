import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet';
import { Link, useParams } from 'react-router-dom';
import postImage from '../../assets/images/pages/home-page.png';
import DeleteButton from '../../components/DeleteButton/DeleteButton';
import DisplayQuill from '../../components/DisplayQuill/DisplayQuill';
import PostBookmarkButton from '../../components/PostBookmarkButton/PostBookmarkButton';
import PostComments from '../../components/PostComments/PostComments';
import ShareButton from '../../components/ShareButton/ShareButton';
import { useAppSelector } from '../../redux/store';
import { getPost } from '../../services/post.services';
import styles from './PostPage.module.css';

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
    <>
      <Helmet>
        <title>{`${postQuery.data.title} | Interview Experience`}</title>
        <meta
          name="description"
          content={`${postQuery.data.postType} titled "${postQuery.data.title}" specially for KKWIEER on Interview Experience`}
        />
        <meta name="twitter:card" content={postImage} />
        <meta
          name="twitter:title"
          content={`${postQuery.data.title} | Interview Experience`}
        />
        <meta
          name="twitter:description"
          content={`${postQuery.data.postType} titled "${postQuery.data.title}" specially for KKWIEER on Interview Experience`}
        />
        <meta name="twitter:image" content={postImage} />

        <meta
          property="og:title"
          content={`${postQuery.data.title} | Interview Experience`}
        />
        <meta
          property="og:description"
          content={`${postQuery.data.postType} titled "${postQuery.data.title}" specially for KKWIEER on Interview Experience`}
        />
        <meta property="og:image" content={postImage} />
        <meta
          property="og:url"
          content={`${process.env.REACT_APP_BASE_CLIENT_URL}/post/${id}`}
        />
        <meta property="og:type" content="article" />
      </Helmet>

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
                <div className={styles.userName}>
                  {postQuery.data.postAuthor}
                </div>
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
                  <Link
                    to={`/post/edit/${id}`}
                    className={styles.editPostButton}
                  >
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
    </>
  );
}

export default PostPage;
