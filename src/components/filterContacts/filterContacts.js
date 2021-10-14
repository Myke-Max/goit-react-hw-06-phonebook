import React from 'react';
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
export default filter;
