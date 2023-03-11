import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userAction } from '../../redux/user/userState';
import { logoutUser } from '../../services/user.services';

type Props = {
  className: string;
  children: JSX.Element | string;
  onClickCallback: () => void;
};

function LogoutButton({ className, children, onClickCallback }: Props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: () => logoutUser(),
    onError: () => {
      toast.error('Internal Server Error');
    },
    onSuccess: () => {
      queryClient.refetchQueries(['user-status']);
      dispatch(userAction.logout());
      onClickCallback();
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
