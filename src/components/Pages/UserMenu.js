import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logOut from '../../redux/auth/auth-operations';
import { Card, Button } from 'react-bootstrap';

const UserMenu = () => {
  const dispatch = useDispatch();
  const getUsername = state => state.auth.user.name;
  const userName = useSelector(getUsername);
  const onLogout = () => {
    dispatch(logOut());
  };

  <Card.Body>
    <Card.Text> Signed in as: {userName}</Card.Text>
    <Button variant="primary" onClick={onLogout}>
      Logout
    </Button>
  </Card.Body>;
};

export default UserMenu;
