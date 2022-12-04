import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'

const WorldPage = (props) => {
  const { allCountriesData } = props
  return (
    <div>
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  )
}

export default WorldPage