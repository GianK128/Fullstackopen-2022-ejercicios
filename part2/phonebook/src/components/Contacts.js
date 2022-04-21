import React from "react";
import Person from "./Person";
import personsService from "../services/personsService";

const Contacts = ({ persons, setPersons }) => {
  const handleDelete = (person) => {
    if (!window.confirm(`Delete ${person.name}?`)) return
    
    personsService
      .deleteEntry(person.id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== person.id))
      })
  }
  
  return (
    <div>
      {persons.length > 0
        ? persons.map(person => (
          <div key={person.id}>
            <Person
              name={person.name}
              phone={person.phone}
            />
            <button onClick={(e) => {handleDelete(person)}}>
              Delete
            </button>
          </div>
        ))
        : <p>No matches found.</p>
      }
    </div>
  )
}

export default Contacts