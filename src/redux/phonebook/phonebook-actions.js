import phoneTypes from './phonebook-type';
import { v4 as uuidv4 } from 'uuid';

const addContacts = ({ name, number }) => ({
  type: phoneTypes.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContact = id => ({
  type: phoneTypes.DELETE,
  payload: id,
});

const filter = value => ({
  type: phoneTypes.FILTER_CONTACT,
  payload: value,
});

export default { addContacts, deleteContact, filter };
