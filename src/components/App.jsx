import React from 'react';
import { ContactForm } from './contactForm/contactForm';
import { ContactList } from './contactList/contactList';
import { Filter } from './filter/filter';
import css from './App.module.css';

function App() {

  return (
    <div className={css.conteinerApp}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm  />
      <div>
        <h2 className={css.title}>Contacts</h2>
        <Filter />
        <ContactList   />
      </div>
    </div>
  );
}

export { App };
