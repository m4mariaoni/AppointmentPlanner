import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter,createBrowserRouter,createRoutesFromElements, Route, Navigate } from 'react-router-dom';
import ContactsPage from './containers/contacts/ContactsPage';
import AppointmentsPage from './containers/appointments/AppointmentsPage';
import Root, {ROUTES} from './components/root/root';


const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root/> }>
    <Route index element={ <Navigate to={ROUTES.CONTACTS} replace/> }/>
    <Route path={ROUTES.CONTACTS} element={ <ContactsPage /> /* Add props to ContactsPage */ }/>
    <Route path={ROUTES.APPOINTMENTS} element={ <AppointmentsPage /> /* Add props to AppointmentsPage */ }/>
</Route>
));


function App() {
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const addContact = (name, phonenumber, email) => {
    setContacts([...contacts, {name, phonenumber,email}]);
  }

  const addAppointment = (name, contact, date, time) => {
    setAppointments([...appointments, {name, contact, date, time}]);
  }
  return (
    <div className="App">
        <ContactsPage contacts={contacts} addContact={addContact} />
        <AppointmentsPage appointments= {appointments} addAppointment={addAppointment} contacts={contacts} />
    </div>
  );
}

export default App;
