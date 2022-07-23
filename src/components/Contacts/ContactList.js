import React from 'react';
import Contact from './Contact';
import { useFetchContactsQuery } from 'redux/contacts-Slice';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';

const ContactList = () => {
  const { data, isLoading } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter);

  if (data) {
    const visibleContacts = data.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

    return isLoading ? (
      <h1> Loading....</h1>
    ) : (
      <ListGroup>
        {visibleContacts.map(({ id, name, phone }) => {
          return <Contact key={id} id={id} name={name} phone={phone} />;
        })}
      </ListGroup>
    );
  }
};

export default ContactList;
