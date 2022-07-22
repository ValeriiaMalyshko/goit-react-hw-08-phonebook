import ContactForm from '../Form/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../Contacts/ContactList';
import Section from 'components/Section/Section';

const ContactsProfile = () => {
  return (
    <>
      <Section text="Phonebook">
        <ContactForm />
      </Section>
      <Section text="Contacts">
        <Filter />
      </Section>
      <ContactList />
    </>
  );
};

export default ContactsProfile;
