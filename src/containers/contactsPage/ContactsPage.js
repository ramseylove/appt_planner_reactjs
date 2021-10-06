import React, { useState, useEffect } from "react";

// import ContactForm from "../../components/contactForm";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, onAddContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [duplicateError, setDuplicateError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (duplicateError) {
      console.log("there is a duplicate error");
    } else {
      onAddContact({
        name: currentName,
        phone: currentPhone,
        email: currentEmail,
      });
      setCurrentName("");
      setCurrentPhone("");
      setCurrentEmail("");
    }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  useEffect(() => {
    // console.log(contactNames);
    const contactNames = contacts.filter(
      (contact) => contact.name === currentName
    );

    if (contactNames.length > 0) {
      setDuplicateError(true);
    }

    return () => {
      setDuplicateError(false);
    };
  }, [contacts, currentName]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={currentName}
          phone={currentPhone}
          email={currentEmail}
          setName={setCurrentName}
          setPhone={setCurrentPhone}
          setEmail={setCurrentEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList contacts={contacts} />
      </section>
    </div>
  );
};
