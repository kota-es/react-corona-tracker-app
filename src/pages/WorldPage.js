import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Header from '../components/Header'

const WorldPage = (props) => {
  const { allCountriesData } = props
  return (
    <div>
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  )
}

export default WorldPage