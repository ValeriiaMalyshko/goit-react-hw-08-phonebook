import React, { useState } from 'react';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts-Slice';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [createContact, { isLoading: isAdding }] = useCreateContactMutation();
  const { data } = useFetchContactsQuery();
  const contacts = data;

  const handleChange = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`There is something wrong`);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '' || number === '') {
      alert(`Please fill all fields`);
      return;
    }

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    createContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <Form className="mt-4" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={name}
            onChange={handleChange}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Number</Form.Label>
          <Form.Control
            name="number"
            value={number}
            onChange={handleChange}
            type="tel"
            placeholder="Enter number"
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={isAdding}>
          Add contact
        </Button>
      </Form>
    </>
  );
};

export default ContactForm;
