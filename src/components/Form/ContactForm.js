import React, { useState } from 'react';
import {
  useCreateContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts-Slice';
import { Form, InputGroup, Button } from 'react-bootstrap';

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
    <InputGroup onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> Name</InputGroup.Text>
        <Form.Control
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> Number</InputGroup.Text>
        <Form.Control
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </InputGroup>
      <Button
        as="input"
        type="submit"
        value=" Add contact"
        disabled={isAdding}
      />
    </InputGroup>
  );
};

export default ContactForm;
