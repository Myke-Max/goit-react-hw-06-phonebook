import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import s from '../filterContacts/filter.module.css';

export default function Filter() {
  const value = useSelector(state => getFilter(state));
  const dispatch = useDispatch();
  return (
    <div className={s.search__wrapper}>
      <label className={s.search__label}>
        All your contacts here
        <input
          placeholder="Enter contact to search . . ."
          type="text"
          className={s.search__input}
          value={value}
          onChange={e => dispatch(phonebookActions.filter(e.target.value))}
        />
      </label>
    </div>
  );
}
// const mapStateToProps = state => ({
//   value: state.phonebook.filter,
// });

// const mapDispatchToProps = dispatch => ({
//   filterChange: e => dispatch(phonebookActions.filter(e.target.value)),
// });

// export default connect(null, mapDispatchToProps)(filter);
