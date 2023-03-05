import { Route, Routes } from 'react-router-dom';
import useUserStatus from '../hooks/useUserStatus';
import AuthRouteLayout from '../pages/AuthRouteLayout/AuthRouteLayout';
import ComingSoon from '../pages/ComingSoon/ComingSoon';
import DefaultLayout from '../pages/DefaultLayout';
import Error from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Loading from '../pages/Loading/Loading';
import Login from '../pages/Login/Login';
import NotFound from '../pages/NotFound/NotFound';
import PostForm from '../pages/PostForm/PostForm';
import PostList from '../pages/PostList/PostList';
import PostPage from '../pages/PostPage/PostPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import ProfileEdit from '../pages/ProfileEdit/ProfileEdit';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import UserRegister from '../pages/UserRegister/UserRegister';
import UserSearch from '../pages/UserSearch/UserSearch';

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
        <Route path="/events" element={<ComingSoon />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/user/search" element={<UserSearch />} />
        <Route element={<AuthRouteLayout />}>
          <Route path="/post" element={<PostForm />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Router;
