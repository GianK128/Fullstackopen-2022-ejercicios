import React, { useState, useEffect } from 'react'
import Contacts from './Contacts'
import Filter from './Filter'
import PersonForm from './PersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => setPersons(response.data))
  }, [])

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