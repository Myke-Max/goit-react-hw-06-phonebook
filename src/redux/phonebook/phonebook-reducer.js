import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';

const contacts = createReducer([], {
  [actions.addContacts]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
});

// const contacts = (state = [], { type, payload }) => {
//   switch (type) {
//     case phonebookType.ADD:
//       return [...state, payload];

//     case phonebookType.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [actions.filter]: (_, { payload }) => payload,
});

// const filter = (state = '', { type, payload }) => {
//   switch (type) {
//     case phonebookType.FILTER_CONTACT:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  contacts,
  filter,
});
