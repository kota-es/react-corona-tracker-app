import React from 'react'
import { SelectorType } from '../types'

const Selector = ({countriesJson, setCountry}: SelectorType) => {
  return (
    <div>
      <select onChange={(e) => setCountry(e.target.value)}>
        {countriesJson.map((country, index) =>
          <option key={index} value={country.Slug}>{country.Country}</option>
        )}
      </select>
    </div>
  )
}

export default Selector