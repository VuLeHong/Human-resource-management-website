import React, {useState} from 'react'
import './Task.css'
import user from '../profile/mockData';

const Task = () => {

  const taskNum = user[0].tasks.length

  // for (let i = 0; i < taskNum; i++) {
  //   return(
  //     <h3>{user[0].tasks[i]}</h3>
  //   )
  // }

  const numTask = () => {
    for (let i = 1; i <= user[0].tasks.length; i++) {
        return (<h3>{user[0].tasks[i]}</h3>)
    }
  }

  return (
    <>
      <div className="task">
      <h1>Hi {user[0].fullName}, here's your task list</h1>
      <h3>You have {user[0].tasks.length} tasks</h3>
        {user[0].tasks.length > 0 ? 
          <div className="list">
            
          </div> 
        : <h3 className='alert'>No task to do</h3>}
      </div>
    </>
  )
}

export default Task
