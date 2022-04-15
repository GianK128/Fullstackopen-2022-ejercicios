import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('New person...')
  const [newPhone, setNewPhone] = useState('New phone...')
  const [filter, setFilter] = useState('')

  const handleNameSubmit = () => (event) => {
    event.preventDefault()
    if (newName === '' || newPhone === '')
    {
      alert('Please, complete every field before submitting')
      return
    }

    const newPerson = {
      name: newName,
      phone: newPhone
    }

    if (persons.some(p => p.name === newPerson.name))
    {
      alert(`${newName} already exists in the phonebook`)
      return
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewPhone('')
  }

  const personsToShow = filter === ''
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <label>Filter shown with</label>
      <input onChange={(e) => setFilter(e.target.value)}/>
      <h2>Add new contact</h2>
      <form onSubmit={handleNameSubmit()}>
        <label>Name:</label>
        <input 
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <label>Phone:</label>
        <input 
          value={newPhone} 
          onChange={(e) => setNewPhone(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      {personsToShow.length > 0
        ? personsToShow.map(person => (
          <p key={person.name}>{person.name} {person.phone}</p>
        ))
        : <p>No matches found.</p>
      }
    </div>
  )
}

export default App