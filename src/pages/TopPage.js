import React from 'react'
import Title from '../components/Title'
import Selector from '../components/Selector'
import Results from '../components/Results'
import Header from '../components/Header'

const TopPage = ({countriesJson, setCountry, getCountryData, countryData}) => {
  return (
    <div>
      <Header />
      <Title />
      <Selector countriesJson={countriesJson} setCountry={setCountry} getCountryData={getCountryData} />
      <Results countryData={countryData} />
    </div>
  )
}

export default TopPage