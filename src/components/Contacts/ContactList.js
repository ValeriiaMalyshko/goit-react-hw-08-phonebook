import React from 'react';
// import PropTypes from 'prop-types';
import Contact from './Contact';
// import s from './Contact.module.css';
import { useFetchContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter);

  if (data) {
    const visibleContacts = data.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <ListGroup>
        {visibleContacts.map(({ id, name, phone }) => {
          return <Contact key={id} id={id} name={name} phone={phone} />;
        })}
      </ListGroup>
    );
  }
};

export default ContactList;
