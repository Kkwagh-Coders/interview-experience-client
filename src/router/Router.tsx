import { Route, Routes } from 'react-router-dom';
import useUserStatus from '../hooks/useUserStatus';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Loading from '../pages/Loading/Loading';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import UserRegister from '../pages/UserRegister/UserRegister';

function Router() {
  const { isLoading, isError } = useUserStatus();

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<UserRegister />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
