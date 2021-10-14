import React, { useState, useEffect } from 'react';
import Phonebook from './components/phonebook';
import ContactsList from './components/contactList/ContactList';
import Filter from './components/filterContacts';
import Container from './components/container';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Counter from './components/Counter';

export default function App() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? [];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const onSearchSameContact = newName => {
  //   return contacts.find(({ name }) => name === newName);
  // };

  // const onSubmitForm = ({ name, number }) => {
  //   if (!onSearchSameContact(name)) {
  //     const newContact = {
  //       id: uuidv4(),
  //       name,
  //       number,
  //     };
  //     setContacts(contacts => [newContact, ...contacts]);

  //     showSuccess();
  //     return;
  //   }
  //   showError();
  // };

  const getFilterValue = e => {
    setFilter(e.currentTarget.value);
  };

  // const onDeleteContact = deleteId => {
  //   setContacts(prevState => {
  //     return prevState.filter(contact => contact.id !== deleteId);
  //   });
  // };

  const showError = () => {
    return toast.error('🦄 The contact already exists in the phone book', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const showSuccess = () => {
    return toast.success('🦄Added new contact', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  // const visibleContact = getVisibleContacts();
  // console.log(getVisibleContacts());
  return (
    <>
      <ToastContainer />
      <Container>
        <Counter />
        <Phonebook contactsCount={contacts} />
        <Filter />
        <ContactsList />
      </Container>
    </>
  );
}

// class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     ],
//     filter: '',
//   };

//   showError = () => {
//     return toast.error('🦄 The contact already exists in the phone book', {
//       position: 'top-left',
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   };

//   showSuccess = () => {
//     return toast.success('🦄Added new contact', {
//       position: 'top-left',
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//     });
//   };

//   onSearchSameContact = newName => {
//     return this.state.contacts.find(({ name }) => name === newName);
//   };

//   onSubmitForm = ({ name, number }) => {
//     if (!this.onSearchSameContact(name)) {
//       const newContact = {
//         id: uuidv4(),
//         name,
//         number,
//       };
//       this.setState(({ contacts }) => ({
//         contacts: [newContact, ...contacts],
//       }));
//       this.showSuccess();
//       return;
//     }
//     this.showError();
//     // alert(`${name} is already in contacts`);
//   };

//   getFilterValue = e => {
//     this.setState({
//       filter: e.currentTarget.value,
//     });
//   };

//   getVisibleContacts = () => {
//     const { filter, contacts } = this.state;
//     const normalizeFilter = filter.toLowerCase();
//     return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
//   };

//   onDeleteContact = deleteId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== deleteId),
//     }));
//   };
//   componentDidMount() {
//     const localContacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(localContacts);

//     if (parsedContacts) {
//       this.setState({
//         contacts: parsedContacts,
//       });
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//       console.log(prevState);
//       console.log(this.state);
//     }
//   }

//   render() {
//     const { filter, contacts } = this.state;
//     const visibleContact = this.getVisibleContacts();
//     return (
//       <>
//         <ToastContainer />
//         <Container>
//           <Phonebook onSubmit={this.onSubmitForm} contactsCount={contacts} />
//           <Filter value={filter} filterChange={this.getFilterValue} />
//           <ContactsList contacts={visibleContact} deleteContact={this.onDeleteContact} />
//         </Container>
//       </>
//     );
//   }
// }

// export default App;
