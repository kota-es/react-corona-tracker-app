import React from 'react'
import Title from '../components/Title'
import Card from '../components/Card'
import Header from '../components/Header'
import { WorldPageType } from '../types'

const WorldPage = ({allCountriesData}: WorldPageType) => {
  return (
    <div>
      <Header />
      <Title />
      <Card allCountriesData={allCountriesData} />
    </div>
  )
}

export default WorldPage