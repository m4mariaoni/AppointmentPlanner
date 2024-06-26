import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  name,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
        <form onSubmit={handleSubmit}>
        <label htmlFor="name">Title</label>
            <input 
            type="text" 
            id="name" 
            name="name"
            value={name}
            onChange={(e) => setTitle(e.target.value)}
            required
            />
            <label htmlFor="date">Date</label>
            <input 
            type="date" 
            id="date" 
            name="date"
            value={date} 
            onChange={(e) => setDate(e.target.value)}
            min={getTodayString()}
            />
            <label htmlFor="time">Time</label>
            <input 
            type="time" 
            id="time" 
            name="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            />
            <ContactPicker 
            contacts = {contacts} 
            onChange = {(e) => setContact(e.target.value)} name ="contact" value={contact} />
            <button type="submit">Add Appointment</button>
        </form>
    </>
  );
};
