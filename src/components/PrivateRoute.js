import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRoute() {
  const getIsLoggedIn = state => state.auth.isLoggedIn;
  const isLogged = useSelector(getIsLoggedIn);

  return isLogged ? <Outlet /> : <Navigate to="/" />;
}
