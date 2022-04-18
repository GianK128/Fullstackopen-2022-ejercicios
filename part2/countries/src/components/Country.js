import React from "react";

const Country = ({ data }) => {
  return (
    <div>
      <h1>{data.name.common}</h1>
      <p>{data.name.official}</p>
      <p>Capital: {data.capital[0]}</p>
      <p>Population: {data.population}</p>
      <img src={data.flags.png} alt={"Country Flag"}></img>
      <h2>Languages</h2>
      <ul>
        {Object.entries(data.languages).map(([key, lang]) =>
          <li key={key}>{lang}</li> 
        )}
      </ul>
    </div>
 )
}

export default Country