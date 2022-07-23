import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/auth-selectors';
import { logOut } from '../../../redux/auth/auth-operations';
import { Button } from 'react-bootstrap';

export default function SignedIn() {
  const userName = useSelector(authSelectors.getUsername);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logOut());
  };
  return (
    <nav className="d-flex justify-content-between rounded border border-1 navbar navbar-expand-lg navbar-light bg-light bg-white">
      <div>
        <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
          Signed in as: {userName}
        </span>
      </div>
      <Button
        style={{ marginRight: '10px' }}
        type="button"
        variant="primary"
        onClick={onLogout}
      >
        Log out
      </Button>
    </nav>
  );
}
