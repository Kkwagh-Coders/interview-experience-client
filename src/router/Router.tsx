import { Route, Routes } from 'react-router-dom';
import useUserStatus from '../hooks/useUserStatus';
import DefaultLayout from '../pages/DefaultLayout';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Loading from '../pages/Loading/Loading';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import PostList from '../pages/PostList/PostList';
import PostForm from '../pages/PostForm/PostForm';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import UserRegister from '../pages/UserRegister/UserRegister';
import PostPage from '../pages/PostPage/PostPage';
import ProfilePage from '../pages/Profile/ProfilePage';

function Router() {
  const { isLoading, isError } = useUserStatus();

  if (isLoading) return <Loading />;

  if (isError) return <Error />;

  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<UserRegister />} />
        <Route path="/post" element={<PostForm />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/posts" element={<PostList />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
