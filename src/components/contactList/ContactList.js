import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from '../../redux/phonebook/phonebook-selectors';
import s from '../contactList/contactList.module.css';
import { IoCallSharp, IoAccessibilityOutline, IoCloseCircleOutline } from 'react-icons/io5';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

export default function ContactsList() {
  const getVisibleContacts = (allContacts, filter) => {
    const normalizeFilter = filter.toLowerCase();
    return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  };
  const contacts = useSelector(state => getVisibleContacts(getContacts(state), getFilter(state)));

  const dispatch = useDispatch();

  const deleteContact = id => dispatch(phonebookActions.deleteContact(id));

  return (
    <ul className={s.contact__list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={s.contact__item} key={id}>
            <p className={s.contact__name}>
              <span className={s.contact__icon}>
                <IoAccessibilityOutline />
              </span>
              {name}
            </p>

            <p>
              <span className={s.contact__icon}>
                <IoCallSharp />
              </span>
              {number}
            </p>
            <button className={s.delete__button} onClick={() => deleteContact(id)}>
              delete
              <span>
                <IoCloseCircleOutline />
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizeFilter = filter.toLowerCase();
//   return allContacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
// };

// const mapStateToProps = state => {
//   const { filter, contacts } = state.phonebook;

//   return {
//     contacts: getVisibleContacts(contacts, filter),
//   };
// };

// const mapDispatchToProps = dispatch => ({
//   deleteContact: id => dispatch(phonebookActions.deleteContact(id)),
// });

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ),
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
