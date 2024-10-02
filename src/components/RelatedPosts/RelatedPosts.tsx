import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { getRelatedPosts } from '../../services/post.services';
import generateSlug from '../../utils/generateSlug';
import styles from './RelatedPosts.module.css';

type Props = {
  postId: string;
};

function RelatedPosts({ postId }: Props) {
  const relatedPostQuery = useQuery({
    queryKey: ['related-post', postId],
    queryFn: () => getRelatedPosts(postId, 6),
    staleTime: 30 * 60 * 1000, // Stale time for 30min
  });

  if (relatedPostQuery.isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul className={styles.RelatedPosts}>
      {relatedPostQuery.data?.map((relatedPost) => (
        <li key={relatedPost._id}>
          <Link to={`/post/${relatedPost._id}/${generateSlug(relatedPost.title)}`}>{relatedPost.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default RelatedPosts;
