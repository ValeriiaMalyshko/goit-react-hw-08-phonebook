// import React from 'react';
import React, { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getCurrentUser } from '../redux/auth/auth-operations';
import UserMenu from './Pages/UserMenu';
import PublicRoute from './PublicRoute ';
import PrivateRoute from './PrivateRoute';

const Login = lazy(() => import('./Pages/Login'));
const Registration = lazy(() => import('./Pages/Registration'));
const ContactsProfile = lazy(() => import('./Pages/ContactsProfile'));

export default function App() {
  const dispatch = useDispatch();
  const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isFetchingCurrentUser ? (
        <h1>Loading....</h1>
      ) : (
        <>
          <UserMenu />
          <Suspense fallback={<h1>Loading....</h1>}>
            <Routes>
              <Route path="/" element={<PublicRoute />}>
                <Route path="/" element={<Navigate replace to="login" />} />
                <Route path="register" element={<Registration />} />
                <Route path="login" element={<Login />} />
              </Route>

              <Route path="/" element={<PrivateRoute />}>
                <Route path="/" element={<Navigate replace to="contacts" />} />
                <Route path="contacts" element={<ContactsProfile />} />
              </Route>
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
