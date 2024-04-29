import React, { useState } from 'react'
import "./Task.css"
import rankedArr from '../profile/mockData';
import { BsChat, BsFillFolderFill, BsFillSendFill, BsXSquare } from 'react-icons/bs'

const Task = () => {

  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"])

  const showBtn = document.getElementById("showComment")
  const sendEl = document.getElementById("send")
  const commentEl = document.getElementById("comment")
  const closeBtn = document.getElementById("close")
  
  showBtn.addEventListener("click", showItem)
  function showItem() {
    commentEl.style.display = "block"
  }

  closeBtn.addEventListener("click", hideItem)

  function hideItem() {
    commentEl.style.display = "none"
  }
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
                <button className='comment-btn' id='showComment'>
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
              <div className="close-div">
                <button id='close'>
                  <BsXSquare />
                </button>
              </div>
              <div className="comment-div">
                <input type="text" placeholder='Comment here...' id="" />
                <button type="submit" id='send'><BsFillSendFill /></button>
              </div>
            </div>
        </div>
      )}
      </div>

    </div>
  )
}

// Có mồi function backend rồi á

export default Task
