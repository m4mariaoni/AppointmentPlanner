import React, {useState} from "react";

export const ContactPicker = ({contacts, onChange, name, value}) => {
  return (
    <>
        <select onChange={onChange} value={value} name={name}>
            <option key={-1} value={""}> No Contact Selected</option>
            {contacts.map((contact) => (
                <option key={contact.name} value={contact.name}>
                    {contact.name}
                </option>
            )
            )}
        </select>
    </>
  );
};