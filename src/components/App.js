import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  // const [counter, setCounter] = useState(0);

  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const contactdata = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContact) setContacts(retriveContact);
  }, []);

  // useEffect( () => {
  //   setCounter(100);
  // }, [counter]);

  return (
    <div className="ui container">
      <Header />
      <AddContact contactdata={contactdata} />
      <ContactList contacts={contacts} />
    </div>
    // <div className="App">
    //   <button onClick={ () => { setCounter( (prevCount) =>prevCount-1 ) }}>-</button>
    //   <h1>{counter}</h1>
    //   <button onClick={ () => { setCounter( (prevCount) =>prevCount+1 ) }}>+</button>
    // </div>
  );
}

export default App;
