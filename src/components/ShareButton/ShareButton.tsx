import { toast } from 'react-hot-toast';
import generateSlug from '../../utils/generateSlug';
import styles from './ShareButton.module.css';

type Props = {
  title: string;
  author: string;
  postId: string;
};

function ShareButton({ title, author, postId }: Props) {
  const handlePostShare = () => {
    const url = `${process.env.REACT_APP_BASE_CLIENT_URL}/post/${postId}/${generateSlug(title)}`;

    // Here we have to use @ts-ignore as typescript assumes that share is always available
    // but it may not be for some devices
    // @ts-ignore
    if (navigator.share) {
      const text = `Checkout the post "${title}" by ${author} on Interview Experience`;
      navigator.share({ title, text, url }).catch(() => {
        toast.error('Something went wrong');
      });
    } else {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          toast.success('Link Copied to Clipboard!!');
        })
        .catch(() => {
          toast.error('Unable to Copy to Clipboard!!');
        });
    }
  };

  return (
    <button
      type="button"
      className={styles.shareButton}
      onClick={handlePostShare}
    >
      Share
    </button>
  );
}

export default ShareButton;
