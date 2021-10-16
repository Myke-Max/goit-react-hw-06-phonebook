import { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {} from 'react-redux';
import s from '../phonebook/phonebook.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoCallSharp, IoAccessibilityOutline } from 'react-icons/io5';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };
  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };
  onSearchSameContact = newName => {
    return this.props.contactsCount.find(({ name }) => name === newName);
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.onSearchSameContact(this.state.name)) {
      this.showError();
      return;
    }

    this.props.onSubmit(this.state);
    this.onResetForm();
    this.showSuccess();
  };

  onResetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  showSuccess() {
    return toast.success('🦄Added new contact', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  showError() {
    return toast.error('🦄 The contact already exists in the phone book', {
      position: 'top-left',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  render() {
    const { contactsCount } = this.props;
    const { name, number } = this.state;
    return (
      <div className={s.contact__wrapper}>
        <h2 className={s.title}>Phonebook</h2>
        <p className={s.contacts__count}>In your phone book: {contactsCount.length} contacts</p>
        <form className={s.form} onSubmit={this.onSubmit}>
          <label className={s.contact__name}>
            <IoAccessibilityOutline /> Name
            <input
              className={s.input__name}
              placeholder="Whats you're name?"
              type="text"
              name="name"
              value={name}
              onChange={this.onInputChange}
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
              onChange={this.onInputChange}
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
}

Phonebook.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

const mapStateToProps = state => ({
  contactsCount: state.phonebook.contacts,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: ({ name, number }) => dispatch(phonebookActions.addContacts({ name, number })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Phonebook);
