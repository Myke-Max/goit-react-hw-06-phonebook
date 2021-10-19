import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import {} from 'react-redux';
import s from '../phonebook/phonebook.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCallSharp, IoAccessibilityOutline } from 'react-icons/io5';
import { getFilter } from '../../redux/phonebook/phonebook-selectors';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

export default function Phonebook() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => getFilter(state));

  const dispatch = useDispatch();

  const onInputChange = e => {
    const inputType = e.currentTarget.name;

    switch (inputType) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        throw new Error();
    }
  };
  const onSearchSameContact = newName => {
    return contacts.find(({ name }) => name === newName);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (onSearchSameContact(name)) {
      showError();
      return;
    }
    dispatch(phonebookActions.addContacts({ name, number }));
    onResetForm();
    showSuccess();
  };

  const onResetForm = () => {
    setName('');
    setNumber('');
  };

  const showSuccess = () => {
    return toast.success('🦄Added new contact', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const showError = () => {
    return toast.error('🦄 The contact already exists in the phone book', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className={s.contact__wrapper}>
      <h2 className={s.title}>Phonebook</h2>
      <p className={s.contacts__count}>In your phone book: {contacts.length} contacts</p>
      <form className={s.form} onSubmit={onSubmit}>
        <label className={s.contact__name}>
          <IoAccessibilityOutline /> Name
          <input
            className={s.input__name}
            placeholder="Whats you're name?"
            type="text"
            name="name"
            value={name}
            onChange={onInputChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title=""
            required
          />
        </label>

        <label className={s.contact__number}>
          <IoCallSharp /> Number
          <input
            className={s.input__tel}
            placeholder="Your phone number"
            type="tel"
            name="number"
            value={number}
            onChange={onInputChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title=""
            required
          />
        </label>

        <button className={s.add__button} type="submit">
          Add contacts
        </button>
      </form>
    </div>
  );
}

Phonebook.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

// const mapStateToProps = state => ({
//   contactsCount: state.phonebook.contacts,
// });

// const mapDispatchToProps = dispatch => ({
//   onSubmit: ({ name, number }) => dispatch(phonebookActions.addContacts({ name, number })),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
