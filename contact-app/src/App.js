import React from 'react';
import './App.css';
import Header from './components/Header'
import AddContact from './components/AddContact'
import ContactList from './components/ContactList'

function App() {

  const contacts = [
    {
      id: '1',
      name: 'Paolo',
      email: 'paolo@gmail.com'
    },
    {
      id: '2',
      name: 'Mia',
      email: 'mia@gmail.com'
    }
  ]
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts}/>
    </div>
  );
}

export default App;
