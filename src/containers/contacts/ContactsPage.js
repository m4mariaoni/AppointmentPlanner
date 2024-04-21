import React, {useState, useEffect} from "react";
import {ContactForm} from "../../components/contactForm/ContactForm";
import {TileList} from "../../components/tileList/TileLIst";

const ContactsPage = ({contacts , addContact}) =>{
    const [name , setName] = useState('');
    const [phonenumber , setPhonenumber] = useState('');
    const [email , setEmail] = useState('');
    const [isDuplicate, SetIsDuplicate] = useState(false);

    useEffect(() => {
        SetIsDuplicate(contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase()));
    }, [name, contacts]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!isDuplicate){
            addContact(name, phonenumber, email);
            setName('');
            setPhonenumber('');
            setEmail('');
        }
    }

    return (
        <div>
        <section>
          <h2>Add Contact</h2> 
          <ContactForm 
            name = {name}
            setName = {setName}
            phonenumber = {phonenumber}
            setPhonenumber = {setPhonenumber}
            email = {email}
            setEmail = {setEmail}
            isDuplicate = {isDuplicate}            
            SetIsDuplicate = {SetIsDuplicate}
            handleSubmit={handleSubmit} />
        </section>
        <hr />
        <section>
          <h2>Contacts</h2>
          <TileList items = {contacts} />
        </section>
      </div>
    )

}

export default ContactsPage;