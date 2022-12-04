import React from 'react'
import Title from '../components/Title'
import Selector from '../components/Selector'
import Results from '../components/Results'

const TopPage = (props) => {
  const {countriesJson, setCountry, getCountryData, countryData } = props
  return (
    <div>
      <Title />
      <Selector countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} />
      <Results countryData={countryData} />
    </div>
  )
}

export default TopPage