import React, { useState, useEffect } from 'react'
import Contacts from './Contacts'
import Filter from './Filter'
import PersonForm from './PersonForm'
import personsService from '../services/personsService'
import Alert from './Alert'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [error, setError] = useState({message: null, category: null})

  useEffect(() => {
    personsService
      .getAll()
      .then(data => setPersons(data))
  }, [])

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <Alert message={error.message} category={error.category}/>
      <h1>Phonebook</h1>
      <Filter 
        label={"Filter shown with"}
        handleChange={(e) => setFilter(e.target.value)}
      />
      <h2>Add new contact</h2>
      <PersonForm 
        persons={persons}
        setPersons={setPersons}
        setError={setError}
      />
      <h2>Numbers</h2>
      <Contacts 
        persons={personsToShow}
        setPersons={setPersons}
        setError={setError}
      />
    </div>
  )
}

export default App