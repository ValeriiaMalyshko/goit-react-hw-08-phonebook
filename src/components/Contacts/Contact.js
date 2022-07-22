import React from 'react';
import propTypes from 'prop-types';
// import s from './Contact.module.css';
import { useDeleteContactMutation } from 'redux/contacts-Slice';
import { Button, ListGroup } from 'react-bootstrap';

export default function Contact({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <ListGroup.Item>
      <span>
        {name} : {phone}
      </span>
      <Button
        variant="danger"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
}

Contact.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  phone: propTypes.string.isRequired,
};
