import { Button, Form, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { loginThunk } from '../store/modules/auth/slice';

const Registration = () => {
  const dispatch = useDispatch();
  const [blank, setBlank] = useState({
    username: '',
    email: '',
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
    dispatch(loginThunk(blank));
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            value={blank.username}
            type="text"
            name="username"
            placeholder="Enter username"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={blank.email}
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={blank.password}
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Registration
        </Button>
      </Form>
    </Container>
  );
};

export default Registration;
