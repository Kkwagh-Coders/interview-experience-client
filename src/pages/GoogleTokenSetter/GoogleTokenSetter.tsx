import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setLocalStorage } from '../../utils/localStorage';
import Loading from '../Loading/Loading';

function GoogleTokenSetter() {
  const { token } = useParams();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!token) return;

    const handleGoogleTokenSetter = async () => {
      setLocalStorage('token', token);

      queryClient.refetchQueries(['user-status']);
      navigate('/');
    };

    handleGoogleTokenSetter();
  }, [token, navigate, queryClient]);

  return <Loading />;
}

export default GoogleTokenSetter;
