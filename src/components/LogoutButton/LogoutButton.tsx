import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/user.services';

type Props = {
  className: string;
  children: JSX.Element | string;
};

function LogoutButton({ className, children }: Props) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => logoutUser(),
    onError: () => {
      toast.error('Internal Server Error');
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['user-status']);
      navigate('/');
    },
  });

  return (
    <button
      type="button"
      className={`${className}`}
      disabled={isLoading}
      onClick={() => mutate()}
    >
      {children}
    </button>
  );
}

export default LogoutButton;
