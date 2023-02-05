import axios from 'axios';
import { AdminStateData } from '../types/admin.types';
import { UserStateData } from '../types/user.types';
import { BASE_API_URL } from './serverConfig';

interface IUserStatus {
  isLoggedIn: boolean;
  isAdmin: boolean;
  user: UserStateData | null;
  admin: AdminStateData | null;
}

const getUserStatus = () => {
  const url = `${BASE_API_URL}/status`;
  return axios
    .get<IUserStatus>(url, { withCredentials: true })
    .then((response) => response.data);
};

export default getUserStatus;
