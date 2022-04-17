import React, { useState } from 'react'
import Contacts from './Contacts'
import Filter from './Filter'
import PersonForm from './PersonForm'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ])
  const [filter, setFilter] = useState('')

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter 
        label={"Filter shown with"}
        handleChange={(e) => setFilter(e.target.value)}
      />
      <h2>Add new contact</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
      />
      <h2>Numbers</h2>
      <Contacts persons={personsToShow}/>
    </div>
  )
}

export default App