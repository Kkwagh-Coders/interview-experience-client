import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setUserToken } from '../../services/user.services';

function GoogleTokenSetter() {
  const { token } = useParams();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!token) return;

    const handleGoogleTokenSetter = async () => {
      await setUserToken(token);
      queryClient.refetchQueries(['user-status']);
      navigate('/');
    };

    handleGoogleTokenSetter();
  }, [token, navigate, queryClient]);

  return <div>Google Token Verification</div>;
}

export default GoogleTokenSetter;
