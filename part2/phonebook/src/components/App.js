import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('New person...')

  const handleNameSubmit = () => (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName
    }

    if (persons.some(p => p.name === newPerson.name))
    {
      alert(`${newName} already exists in the phonebook`)
      return
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
  }

  const handleNameChange = () => (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleNameSubmit()}>
        <label>Name:</label>
        <input value={newName} onChange={handleNameChange()}/>
        <button type="submit">Add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (
        <p key={person.name}>{person.name}</p>
      ))}
    </div>
  )
}

export default App