// import { useState, useEffect } from "react";
import "./App.css";
import ContactAddForm from "./ContactAddForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import Container from "./Container";
// import { v4 as uuidv4 } from "uuid";

function App() {
  // const [contacts, setContacts] = useState(() => {
  //   return JSON.parse(localStorage.getItem("contacts")) ?? [];
  // });
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const handleAddContact = (name, number) => {
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };

  //   if (
  //     contacts.find(
  //       (contact) => contact.name.toLowerCase() === name.toLowerCase()
  //     )
  //   ) {
  //     alert(`${name} is already in contacts.`);
  //   } else {
  //     setContacts((contacts) => [...contacts, contact]);
  //   }
  // };

  // const handleDeleteContact = (id) => {
  //   setContacts(contacts.filter((contact) => contact.id !== id));
  // };

  // const changeFilter = (e) => {
  //   setFilter(e.currentTarget.value);
  // };

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactAddForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

export default App;
