import React, {useState} from 'react'
import countriesJson from '../countries.json'

const Selector = () => {
  const [country, setCountry] = useState(countriesJson[0].Slug);

  const getCountryData = () => {
    fetch(`https://monotein-books.vercel.app/api/corona-tracker/country/${country}`)
    .then(res => res.json())
    .then(data => console.log(data))
  }
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