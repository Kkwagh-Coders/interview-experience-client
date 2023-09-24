import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { setUserToken } from '../../services/user.services';

function GoogleTokenSetter() {
  const navigate = useNavigate();
  const { token } = useParams();

  useEffect(() => {
    if (!token) return;

    const handleGoogleTokenSetter = async () => {
      await setUserToken(token);
      navigate('/');
    };

    handleGoogleTokenSetter();
  }, [navigate, token]);

  return <div>Google Token Verification</div>;
}

export default GoogleTokenSetter;
