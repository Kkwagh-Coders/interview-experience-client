import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { getLocalStorageData, setLocalStorage } from '../../utils/localStorage';
import Loading from '../Loading/Loading';

function GoogleTokenSetter() {
  const { token } = useParams();

  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (!token) return;

    const handleGoogleTokenSetter = async () => {
      setLocalStorage('token', token);

      queryClient.refetchQueries(['user-status']);

      // Reading google login redirect url and clearing it from local storage
      const redirectUrl = getLocalStorageData<string>('google-login-redirect');
      navigate(redirectUrl || '/');
    };

    handleGoogleTokenSetter();
  }, [token, navigate, queryClient, searchParams]);

  return <Loading />;
}

export default GoogleTokenSetter;
