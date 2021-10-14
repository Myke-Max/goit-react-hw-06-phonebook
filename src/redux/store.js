import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter/counter-reducer';
import phonebookReducer from './phonebook/phonebook-reducer';
const rootReducer = combineReducers({
  counter: counterReducer,
  phonebook: phonebookReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
