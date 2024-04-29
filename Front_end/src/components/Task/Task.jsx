import React, { useState } from 'react'
import "./Task.css"
import rankedArr from '../profile/mockData';
import { BsChat, BsFillFolderFill, BsFillSendFill } from 'react-icons/bs'

const Task = () => {

  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"])

  const [show, setShow] = useState(Array(tasks.length).fill(false))

  const toggle = (index) => {
    setShow(show.map((item, i) => i === index ? !item : item))
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
                <button className='comment-btn' onClick={() => toggle(index)}>
                    Comment
                    <BsChat className='icons'/>
                </button>
                <button className='move-btn' onClick={() => {}}>
                    Upload
                    <BsFillFolderFill className='icons'/>
                </button>
              </div>
            </div>
            {show[index] &&
              <div className="comment">
                <div className="comment-div">
                  <input type="text" placeholder='Comment here...' id="" />
                  <button type="submit" onClick={() => {}}><BsFillSendFill /></button>
                </div>
              </div>
            }
        </div>
      )}
      </div>

    </div>
  )
}

// Có mồi function backend rồi á

export default Task
