import { BASE_API_URL } from '../../services/serverConfig';
import { setLocalStorage } from '../../utils/localStorage';
import styles from './SignInWithGoogle.module.css';

type Props = {
  redirectURLOnLogin: string;
};

function SignInWithGoogle({ redirectURLOnLogin }: Props) {
  // This handles the control of google auth to backend
  const handleGoogleSignIn = () => {
    setLocalStorage('google-login-redirect', redirectURLOnLogin);
    const googleAuthUrl = `${BASE_API_URL}/user/auth/google/callback`;
    window.open(googleAuthUrl, '_self');
  };

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      className={styles.SignInWithGoogle}
    >
      <img
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        loading="lazy"
        alt="google logo"
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInWithGoogle;
