import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { userAction } from '../redux/user/userState';
import getUserStatus from '../services/status.services';

const useUserStatus = () => {
  const dispatch = useAppDispatch();

  // Write logic for storing redux
  const userState = useAppSelector((state) => state.userState);

  useEffect(() => {
    const loadUserStatus = async () => {
      try {
        const data = await getUserStatus();

        if (!data.isLoggedIn) {
          dispatch(userAction.logout());
        } else if (data.isAdmin && data.admin) {
          dispatch(userAction.loginAdmin({ admin: data.admin }));
        } else if (!data.isAdmin && data.user) {
          dispatch(userAction.loginUser({ user: data.user }));
        } else {
          dispatch(userAction.logout());
        }
      } catch (error) {
        dispatch(userAction.logout());
      }
    };

    loadUserStatus();
  }, [dispatch]);

  return userState.isLoading;
};

export default useUserStatus;
