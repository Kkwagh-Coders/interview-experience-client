import { getLocalStorageData } from './localStorage';

const getAuthToken = () => {
  const token = getLocalStorageData<string>('token');
  return token;
};

export default getAuthToken;
