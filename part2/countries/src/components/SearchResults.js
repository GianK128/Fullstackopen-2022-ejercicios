import React from "react";
import Country from "./Country";

const SearchResults = ({ results, setResults }) => {
    if (results.length === 1) {
        return <Country data={results[0]}/>
    }
    
    const handleShow = (result) => {
        setResults([result])
    }

    return (
        <div>
            {results.length < 10
                ? results.map(res => 
                    <p key={res.name.common}>
                        {res.name.common}
                        <button onClick={() => {handleShow(res)}}>
                            Show
                        </button>
                    </p>
                )
                : <p>Too many matches. Please, specify more.</p>
            }
        </div>
    )
}

export default SearchResults