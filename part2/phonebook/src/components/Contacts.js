import React from "react";
import Person from "./Person";

const Contacts = ({ persons }) => {
    return (
        <div>
            {persons.length > 0
                ? persons.map(person => (
                    <Person
                        key={person.name}
                        name={person.name}
                        phone={person.phone}
                    />
                ))
                : <p>No matches found.</p>
            }
        </div>
    )
}

export default Contacts