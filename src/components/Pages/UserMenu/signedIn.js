import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { logOut } from '../../../redux/auth/auth-operations';
import { Navbar, Button } from 'react-bootstrap';

export default function SignedIn() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logOut());
  };
  return (
    <>
      <Navbar.Collapse>
        <Navbar.Text> Signed in as: {userName} </Navbar.Text>
        <Button variant="primary" onClick={onLogout}>
          Logout
        </Button>
      </Navbar.Collapse>
    </>
  );
}
