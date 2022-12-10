import React from 'react'
import { CardType } from '../types'

const Card = ({allCountriesData}: CardType) => {
  return (
    <div>
      {allCountriesData.map((singleData, index) => {
        const {Country, NewConfirmed, TotalConfirmed } = singleData
        return (
          <div key={index}>
            <h2>{ Country }</h2>
            <p>新規感染者数：{ NewConfirmed.toLocaleString() }</p>
            <p>感染者総数：{ TotalConfirmed.toLocaleString() }</p>
          </div>
        )
      })}
    </div>
  )
}

export default Card