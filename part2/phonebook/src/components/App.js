import React, { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phone: '040-1234567' }
  ]) 
  const [newName, setNewName] = useState('New person...')
  const [newPhone, setNewPhone] = useState('New phone...')

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

  return (
    <div>
      <h2>Phonebook</h2>
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
      {persons.map(person => (
        <p key={person.name}>{person.name} {person.phone}</p>
      ))}
    </div>
  )
}

export default App