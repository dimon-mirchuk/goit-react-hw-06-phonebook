import { useSelector, useDispatch } from "react-redux";
import { deleteContact } from "../../Redux/contacts/contacts-actions";
import PropTypes from "prop-types";
import ContactListItem from "../ContactListItem";
import { getVisibleContacts } from "../../Redux/contacts/contacts-selectors";
import styles from "./ContactList.module.css";

const { item, list } = styles;

const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(getVisibleContacts);
  const onDelete = (id) => dispatch(deleteContact(id));

  return (
    <ul className={list}>
      {visibleContacts.map(({ id, name, number }) => (
        <li className={item} key={id}>
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
