import { useQuery } from '@tanstack/react-query';
import { useAppDispatch } from '../redux/store';
import { userAction } from '../redux/user/userState';
import getUserStatus from '../services/status.services';

const useUserStatus = () => {
  const dispatch = useAppDispatch();

  const { isLoading, isError } = useQuery(['user-status'], async () => {
    const data = await getUserStatus();

    if (data.isLoggedIn && data.isAdmin && data.admin) {
      dispatch(userAction.loginAdmin({ admin: data.admin }));
    } else if (data.isLoggedIn && !data.isAdmin && data.user) {
      dispatch(userAction.loginUser({ user: data.user }));
    } else {
      dispatch(userAction.logout());
    }

    return data;
  });

  return { isLoading, isError };
};

export default useUserStatus;
