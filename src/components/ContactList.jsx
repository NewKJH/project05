import "./ContactList.css";
import ContactItem from "./ContactItem";
import { useState } from "react";

export default function ContactList({ contacts, onDelete }) {
  const getFilterdData = () => {
    return contacts.filter((contact) => contact.content);
}

  const filteredContacts = getFilterdData();
  
  return (
    <div className="ContactList">
      <div className="title">Contact List</div>
      {/* <ContactItem key={contacts.id} {...contacts} onDelete={onDelete}/>
      <ContactItem key={contacts.id} {...contacts} onDelete={onDelete}/>
      <ContactItem key={contacts.id} {...contacts} onDelete={onDelete}/> */}

      {filteredContacts.map((contact) => {
        return <ContactItem className="ContactItem" key={contacts.id} {...contact} onDelete={onDelete} />;
      })}
    </div>
  );
}
