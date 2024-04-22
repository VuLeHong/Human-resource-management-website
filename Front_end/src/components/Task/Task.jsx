import React, { useState } from 'react'
import "./Task.css"

const ToDoList = () => {

  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }

  function addTask() {

  }

  function CommentTask(index) {

  }

  function moveTaskUp(index) {

  }



  return (
    <div className='to-do-list'>

      <h1>UIT Evaluation System</h1>

      <ol>
        {tasks.map((task, index) =>
        <li key={index}>
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
  )
}

export default ToDoList
