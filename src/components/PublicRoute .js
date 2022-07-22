import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PublicRoute() {
  const getIsLoggedIn = state => state.auth.isLoggedIn;
  const isLogged = useSelector(getIsLoggedIn);

  return isLogged ? <Navigate to="contacts" /> : <Outlet />;
}
