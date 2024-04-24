import React, { useState } from 'react'
<<<<<<< HEAD
<<<<<<< Updated upstream
import './Task.css'
=======
import "./Task.css"
import user from '../profile/mockData';
import { BsChat, BsFillFolderFill } from 'react-icons/bs'

const ToDoList = () => {

  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
  const commentEl = document.getElementById("commentEl");

  const commentTask = () => {
    return null;
  }
>>>>>>> a407ca35f8a8ecd40754ebdebcffcc1dca86a8b7

  return (
    <div className='todo'>

      <h1 className='title'>UIT Evaluation System</h1>

      <div>
      {tasks.map((task, index) =>
        <div key={index} className="separate-btn">
            <div className="task-list">
              <div className='task-name'>
                <h1 className="text">{task}</h1>
              </div>
              <div className="btn">
                <button className='comment-btn' onClick={commentTask()}>
                    Comment
                    <BsChat className='icons'/>
                </button>
                <button className='move-btn' onClick="">
                    Upload
                    <BsFillFolderFill className='icons'/>
                </button>
              </div>
            </div>
            <div className="comment" id='comment'>
              
            </div>
        </div>
      )}
      </div>

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

// Có mồi function backend rồi á

export default ToDoList
