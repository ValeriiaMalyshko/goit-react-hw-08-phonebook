import React from 'react';
import propTypes from 'prop-types';
import { useDeleteContactMutation } from 'redux/contacts-Slice';
import { Button, ListGroup } from 'react-bootstrap';

export default function Contact({ id, name, number }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <ListGroup.Item>
      <span>
        {name} : {number}
      </span>
      <Button
        variant="danger"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
        style={{ marginLeft: '10px' }}
      >
        Delete
      </Button>
    </ListGroup.Item>
  );
}

Contact.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
