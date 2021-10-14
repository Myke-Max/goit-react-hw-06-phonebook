import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../../redux/counter/counter-actions';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

function Counter({ value, step, Increment, Decrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => Increment(step)}
        onDecrement={() => Decrement(step)}
      />
    </div>
  );
}

const mapStateToProps = state => ({
  value: state.counter.value,
  step: state.counter.step,
});

const mapDispatchToProps = dispatch => ({
  Increment: value => dispatch(Actions.onIncrement(value)),
  Decrement: value => dispatch(Actions.onDecrement(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
