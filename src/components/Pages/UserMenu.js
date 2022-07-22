import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operations';
import { Nav, Navbar, Button } from 'react-bootstrap';

export default function UserMenu() {
  const dispatch = useDispatch();
  const getUsername = state => state.auth.user.name;
  const userName = useSelector(getUsername);
  const onLogout = () => {
    dispatch(logOut());
  };
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <>
      {isLoggedIn ? (
        <>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text> Signed in as: {userName} </Navbar.Text>
            <Button variant="primary" onClick={onLogout}>
              Logout
            </Button>
          </Navbar.Collapse>
        </>
      ) : (
        <>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link to="login">
              <Button>Login</Button>
            </Nav.Link>
            <Nav.Link to="register">
              <Button>Register</Button>
            </Nav.Link>
          </Navbar.Collapse>
        </>
      )}
    </>
  );
}

// export default UserMenu;
