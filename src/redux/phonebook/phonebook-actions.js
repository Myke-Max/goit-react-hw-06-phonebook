import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContacts = createAction('phonebook/add', ({ name, number }) => {
  return {
    type: 'phonebook/add',
    payload: {
      id: uuidv4(),
      name,
      number,
    },
  };
});

// const addContacts = ({ name, number }) => ({
//   type: phoneTypes.ADD,
//   payload: {
//     id: uuidv4(),
//     name,
//     number,
//   },
// });

const deleteContact = createAction('phonebook/delete');

// const deleteContact = id => ({
//   type: phoneTypes.DELETE,
//   payload: id,
// });

const filter = createAction('phonebook/filterContact');

// const filter = value => ({
//   type: phoneTypes.FILTER_CONTACT,
//   payload: value,
// });

export default { addContacts, deleteContact, filter };
