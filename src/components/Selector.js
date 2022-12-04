import React from 'react'

const Selector = ({countriesJson, setCountry, getCountryData}) => {
  return (
    <div>
      <select onChange={(e) => setCountry(e.target.value)}>
        {countriesJson.map((country, index) =>
          <option key={index} value={country.Slug}>{country.Country}</option>
        )}
      </select>
      <button onClick={getCountryData}>GetData</button>
    </div>
  )
}

export default Selector