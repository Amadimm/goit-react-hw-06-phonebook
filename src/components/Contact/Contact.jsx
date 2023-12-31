import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import css from './Contact.module.css';
import { deleteContact } from 'redux/contactsSlice';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <div>
      {contact.name}: {contact.number}
      <button
        type="submit"
        value={contact.id}
        onClick={handleDelete}
        className={css.delBtn}
      >
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};