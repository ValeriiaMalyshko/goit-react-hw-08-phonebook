import React from 'react';
// import React, { Component } from 'react';
import Form from './Form/Form';
import ContactList from './Contacts/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div>
      <Section text="Phonebook">
        <Form />
      </Section>
      <Section text="Contacts">
        <Filter />
      </Section>
      <ContactList />
    </div>
  );
}
