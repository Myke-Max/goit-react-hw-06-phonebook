import Phonebook from './components/phonebook';
import ContactsList from './components/contactList/ContactList';
import Filter from './components/filterContacts';
import { ToastContainer } from 'react-toastify';
import Container from './components/container';

// import Counter from './components/Counter';

export default function App() {
  return (
    <>
      <ToastContainer />
      <Container>
        {/* training with Counter */}
        {/* <Counter /> */}
        <Phonebook />
        <Filter />
        <ContactsList />
      </Container>
    </>
  );
}
