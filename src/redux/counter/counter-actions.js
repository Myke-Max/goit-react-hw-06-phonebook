export const onIncrement = value => ({
  type: 'counter/Increment',
  payload: value,
});

export const onDecrement = value => ({
  type: 'counter/Decrement',
  payload: value,
});
