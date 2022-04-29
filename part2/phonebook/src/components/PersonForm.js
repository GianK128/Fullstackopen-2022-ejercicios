import React, { useState } from "react";
import Input from "./Input";
import personsService from "../services/personsService";

const PersonForm = ({ persons, setPersons }) => {
    const [newName, setNewName] = useState('New person...')
    const [newPhone, setNewPhone] = useState('New phone...')
    
    const handleNameSubmit = () => (event) => {
        event.preventDefault()
        if (newName === '' || newPhone === '')
        {
          alert('Please, complete every field before submitting')
          return
        }
    
        if (persons.some(p => p.name === newName))
        {
          if (window.confirm(`${newName} already exists in the phonebook. Replace the old number with the new one?`)) {
            const personToUpdate = persons.find(p => p.name === newName)
            personToUpdate.phone = newPhone

            personsService
              .updateEntry(personToUpdate)
              .then(data => {
                  console.log(data)
                  setPersons(persons.map(p =>  
                    p.id === personToUpdate.id 
                      ? personToUpdate
                      : p
                    )
                  )
                }
              )
            return
          }
        }

        const newPerson = {
          name: newName,
          phone: newPhone
        }
    
        personsService
          .createEntry(newPerson)
          .then(data => {
            setPersons(persons.concat(data))
            setNewName('')
            setNewPhone('')
          })
      }

    return (
        <form onSubmit={handleNameSubmit()}>
            <Input 
                label={"Name:"}
                value={newName}
                handleChange={e => setNewName(e.target.value)}
            />
            <Input 
                label={"Phone:"}
                value={newPhone}
                handleChange={e => setNewPhone(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    )
}

export default PersonForm