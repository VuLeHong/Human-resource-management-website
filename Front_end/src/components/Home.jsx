import React from 'react'
import Task from './Task/Task'
import Rank from './Rank/Rank'
import Mini_profile from './Mini_profile/Mini_profile'
function Home() {
  return (
    <div className='Home'>
          <Mini_profile/>
          <Task/>
          <Rank/>
        
    </div>
  )
}

export default Home