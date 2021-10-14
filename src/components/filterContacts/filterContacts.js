import React from 'react';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';
import s from '../filterContacts/filter.module.css';

const filter = ({ value, filterChange }) => {
  return (
    <div className={s.search__wrapper}>
      <label className={s.search__label}>
        All your contacts here
        <input
          placeholder="Enter contact to search . . ."
          type="text"
          className={s.search__input}
          value={value}
          onChange={filterChange}
        />
      </label>
    </div>
  );
};
const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  filterChange: e => dispatch(phonebookActions.filter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(filter);
