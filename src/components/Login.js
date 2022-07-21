import { Button, Form, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { loginThunk } from '../store/modules/auth/slice';

const Login = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const onChange = e => {
    setForm(prevForm => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(loginThunk(form));
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={form.username}
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={form.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
