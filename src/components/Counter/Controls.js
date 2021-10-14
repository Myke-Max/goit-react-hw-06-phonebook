import React from 'react';

const Controls = ({ onIncrement, onDecrement, step }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      Увеличить {step}
    </button>
    <button type="button" onClick={onDecrement}>
      Уменьшить {step}
    </button>
  </div>
);

export default Controls;
