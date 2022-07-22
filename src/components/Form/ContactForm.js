import React, { useState } from 'react';
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import s from './Form.module.css';
// import { connect } from 'react-redux';
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
    <InputGroup onSubmit={handleSubmit} hasValidation>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> Name</InputGroup.Text>
        <Form.Control
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          requiredisInvalid
          value={name}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"> Number</InputGroup.Text>
        <Form.Control
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          requiredisInvalid
          value={number}
          onChange={handleChange}
        />
        <Form.Control.Feedback type="invalid">
          Please choose a username.
        </Form.Control.Feedback>
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
