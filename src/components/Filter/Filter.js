import { useSelector, useDispatch } from "react-redux";
import { filterContact } from "../../Redux/contacts/contacts-actions";
import {
  getFilter,
  getContacts,
} from "../../Redux/contacts/contacts-selectors";
import styles from "./Filter.module.css";

const { label, input } = styles;

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  if (!contacts.length)
    return <p>Your phonebook is empty. Please add contact.</p>;
  return (
    <label className={label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={(event) => dispatch(filterContact(event.target.value))}
        required
        className={input}
      />
    </label>
  );
};

export default Filter;
