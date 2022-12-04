import React from 'react'

const Selector = (props) => {
  const {countriesJson, setCountry, getCountryData } = props
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