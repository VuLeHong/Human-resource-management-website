import React, { useState } from 'react'
<<<<<<< Updated upstream
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
=======
import "./Task.css"
import Header from '../head/Header'
import Sidebar from '../sidebar/Sidebar'
const ToDoList = () => {

  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  return (
    <>
      <Header />
      <Sidebar />
    <div className='to-do-list'>

    <h1>UIT Evaluation System</h1>

    <ol>
    {tasks.map((task, index) =>
    <li key={index} className="seperate_button">
      <span className="text">{task}</span>
      <button
      className='comment-button'
      onClick={() => CommentTask(index)}>
        Comment
      </button>

      <button
      className='move-button'
      onClick={() => CommentTask(index)}>
        Upload
      </button>
    </li>
  )}
  </ol>

  </div>
    </>
    
>>>>>>> Stashed changes
  )
}

export default Task