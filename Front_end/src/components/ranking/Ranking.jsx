import React from 'react'
import user from '../profile/mockData'
import './Ranking.css'

const Ranking = () => {
  return (
    <div className='ranking'>
        <h1>Hello {user[0].fullName}, here is your rank!</h1>
    </div>
  )
}

export default Ranking
