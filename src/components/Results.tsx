import React from 'react'
import Loading from './Loading'
import { ResultsType } from '../types'

const Results = ({countryData, loading}: ResultsType) => {
  const {date, newConfirmed, totalConfirmed, newRecovered, totalRecovered} = countryData
  return (
    <>
    {loading ? <Loading /> :
    <>
    <div>
    <p>日付： { date.slice(0, 10) }</p>
    <p>新規感染者： { newConfirmed.toLocaleString() }</p>
    <p>感染者総数： { totalConfirmed.toLocaleString() }</p>
    <p>新規回復者： { newRecovered.toLocaleString() }</p>
    <p>回復者総数： { totalRecovered.toLocaleString() }</p>
  </div>
  </>
    }
    </>
  )
}

export default Results