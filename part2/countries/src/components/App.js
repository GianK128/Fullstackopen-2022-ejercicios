import React, { useEffect, useState } from 'react';
import Input from './Input'
import SearchResults from './SearchResults';
import getCountriesData from '../services/getCountriesData'

function App() {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    getCountriesData()
      .then(response => setCountries(response.data))
  }, [])

  const handleSearch = () => (event) => {
    const newSearch = event.target.value
    
    if (newSearch !== '') {
      const newResults = countries.filter(country => 
        country.name.common.toLowerCase().includes(newSearch.toLowerCase())
      )
      setResults(newResults)
    } else {
      setResults([])
    }
    
    setSearch(newSearch)
  }

  return (
    <div>
      <Input 
        label={"Find countries"}
        value={search}
        handleChange={handleSearch()}
      />
      {results.length === 0
        ? <p>Search something to see results.</p>
        : <SearchResults results={results}/>
      }
    </div>
  );
}

export default App;