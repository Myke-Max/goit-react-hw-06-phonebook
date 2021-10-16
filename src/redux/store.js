import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import counterReducer from './counter/counter-reducer';
import phonebookReducer from './phonebook/phonebook-reducer';

const persistConfig = {
  key: 'contacts',
  storage,
};

const rootReducer = combineReducers({
  counter: counterReducer,
  phonebook: persistReducer(persistConfig, phonebookReducer),
});

// withOut toolkit

// const rootReducer = combineReducers({
//   counter: counterReducer,
//   phonebook: phonebookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

// with Toolkit

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});
const persistor = persistStore(store);

export default { store, persistor };
