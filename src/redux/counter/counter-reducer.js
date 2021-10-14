import { combineReducers } from 'redux';

const valueReducer = (state = 1, { type, payload }) => {
  switch (type) {
    case 'counter/Increment':
      return state + payload;

    case 'counter/Decrement':
      return state - payload;

    default:
      return state;
  }
};
const stepReducer = (state = 1, action) => state;

const counterReducer = combineReducers({
  value: valueReducer,
  step: stepReducer,
});
export default counterReducer;
