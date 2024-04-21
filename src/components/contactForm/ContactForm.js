import React from "react";

export const ContactForm = ({
    name,
    setName,
    phonenumber,
    setPhonenumber,
    email,
    setEmail,
    handleSubmit
  }) => {

    return(
       <>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            />
            <label htmlFor="phonenumber">phonenumber</label>
            <input 
            type="tel" 
            id="phonenumber"
            name="phonenumber" 
            value={phonenumber} 
            onChange={(e) => setPhonenumber(e.target.value)}
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            />
            <label htmlFor="email">Email</label>
            <input 
            type="email" 
            id="email" 
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            />
            <button type="submit">Add Contact</button>
        </form>
       </>
    )
}

