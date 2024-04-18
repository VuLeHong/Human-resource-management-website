import React, { useState } from 'react'
import './Task.css'

function Task() {
    const [tasks, setTasks] = useState([])
    const auth = localStorage.getItem("user");
    const auth1 = JSON.parse(auth);
    const t = auth1.tasks;
    

  return (
    <div className='tasking'>
        {
            t.length === 0 ?
            <div><h2>No Task</h2></div>
            :
            t.map(task =>(
                <div>
                    <p>{task.content}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Task