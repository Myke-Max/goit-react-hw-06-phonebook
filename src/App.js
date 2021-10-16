import React, { useState, useEffect } from 'react';
import Phonebook from './components/phonebook';
import ContactsList from './components/contactList/ContactList';
import Filter from './components/filterContacts';
import { ToastContainer } from 'react-toastify';
import Container from './components/container';
import { v4 as uuidv4 } from 'uuid';

import Counter from './components/Counter';

export default function App() {
  return (
    <>
      <ToastContainer />;
      <Container>
        <Counter />
        <Phonebook />
        <Filter />
        <ContactsList />
      </Container>
    </>
  );
}
