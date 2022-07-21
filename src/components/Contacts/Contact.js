import React from 'react';
import PropTypes from 'prop-types';
// import s from './Contact.module.css';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { Button, ListGroup } from 'react-bootstrap';

export default function Contact({ id, name, phone }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    // <li className={s.li}>
    //   <span>
    //     {name} : {phone}
    //   </span>
    //   <button
    //     className={s.btn}
    //     type="button"
    //     onClick={() => deleteContact(id)}
    //     disabled={isDeleting}
    //   >
    //     Delete
    //   </button>
    //   </li>
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
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
