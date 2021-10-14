import { combineReducers } from 'redux';
import phonebookType from './phonebook-type';

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case phonebookType.ADD:
      return [...state, payload];

    case phonebookType.DELETE:
      return state.filter(({ id }) => id !== payload);
    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case phonebookType.FILTER_CONTACT:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
