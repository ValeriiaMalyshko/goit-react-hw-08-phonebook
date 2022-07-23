import React from 'react';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import SignedIn from './signedIn';
import SignedOut from './signedOut';

export default function UserMenu() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return <>{isLoggedIn ? <SignedIn /> : <SignedOut />}</>;

}

// export default UserMenu;
