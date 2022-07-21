import React from 'react';
// import React, { Component } from 'react';
import ContactForm from './Form/Form';
import ContactList from './Contacts/ContactList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import Login from './Login';

export default function App() {
  return (
    <div>
      <Section text="Phonebook">
        <ContactForm />
      </Section>
      <Section text="Contacts">
        <Filter />
      </Section>
      <ContactList />
      <Login />
    </div>
  );
}
