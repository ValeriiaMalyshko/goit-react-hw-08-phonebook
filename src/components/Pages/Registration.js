import { Button, Form, Container } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';

const Registration = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      alert('Please enter all fields');
      return;
    }
    dispatch(register({ name, email, password })).then(({ meta }) => {
      if (meta.requestStatus === 'fulfilled') {
        setName('');
        setEmail('');
        setPassword('');
      }
    });
  };

  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicUsername">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            type="text"
            name="name"
            placeholder="Enter name"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            value={email}
            type="email"
            name="email"
            placeholder="Email"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={password}
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
