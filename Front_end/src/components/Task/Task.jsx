import React, { useState } from 'react'
import './Task.css'

function Task() {
    const [tasks, setTasks] = useState([])
  return (
    <div className='tasking'>
        {
            tasks.length === 0 ?
            <div><h2>No Task</h2></div>
            :
            tasks.map(task =>(
                <diV>
                    {task}
                </diV>
            ))
        }
    </div>
  )
}

export default Task