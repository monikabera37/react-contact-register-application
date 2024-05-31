import React, { useState } from 'react'
import "./Contact.css"
import ContactList from '../ContactList/ContactList'
import ContactForm from '../ContactForm/ContactForm'


const Contact = () => {

const [contacts,setContacts] = useState([
    {full_name:"monika bera" , phone_number : "9856" },
    {full_name:"priya bera" , phone_number : "4251" },
    {full_name:"albert" , phone_number : "5662" }
]);

  return (
    <div id='container'>
    <div id="box">
        <ContactList contacts={contacts} />
        <ContactForm contacts={contacts} addContacts={setContacts} />
        
    </div>
      
    </div>
  )
}

export default Contact;
