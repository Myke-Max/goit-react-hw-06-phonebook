import React from 'react';
import PropTypes from 'prop-types';
import s from '../contactList/contactList.module.css';
import { IoCallSharp, IoAccessibilityOutline, IoCloseCircleOutline } from 'react-icons/io5';

const ContactsList = ({ contacts, deleteContact }) => {
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
};

// ContactsList.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }),
//   ),
// };

export default ContactsList;
