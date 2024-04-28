import { BsChat, BsFillFolderFill } from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import './Task.css'
import Header from '../head/Header'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios' 



function Task() {
    const [tasks, setTasks] = useState([]);
    const auth = localStorage.getItem("user");
    const auth1 = JSON.parse(auth);
    useEffect(() => {
      axios.post('http://localhost:5000/get', {username: auth1.username}) 
      .then(result => {
        setTasks(result.data.tasks)
      })
      .catch(err => console.log(err))
    }, [])

    const handleEditdone = (index) => {
    axios.post('http://localhost:5000/updatedone',{username: auth1.username, index})
    .then(result => {
        location.reload()
    })
    .catch(err => console.log(err))
    }

    const handleEdit = (index) => {
      axios.post('http://localhost:5000/update',{username: auth1.username, index})
      .then(result => {
          location.reload()
      })
      .catch(err => console.log(err))
    }

    const handleDelete = (id) => {
      axios.post('http://localhost:5000/delete',{username: auth1.username, id})
      .then(result => {
          location.reload()
      })  
      .catch(err => console.log(err))
    }

  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <div className='todo'>
        <h1 className='title'>UIT Evaluation System</h1>
        <div >
          {
            tasks.length === 0 ?
            <div><h2>No Task</h2></div>
            :
            tasks.map(task =>(
                <div className="separate-btn">
                  <div className='task-list'>
                    <div className='task-name'>
                      <p className={task.isdone ? "line_through text" : "text"}>{task.content}</p>
                    </div>
                  </div>
                  <div className="btn">
                    <button className='comment-btn'>Comment<BsChat className='icons'/></button>
                    <button className='move-btn'>Upload<BsFillFolderFill className='icons'/></button>
                  </div>
                </div>
            ))
          }
        </div>
      {/* <div>
      {tasks.map((task, index) =>
      <div key={index} className="separate-btn">
      <div className="task-list">
        <div >
          <h1 className="text">{task}</h1>
        </div>
        
      </div>
      <div className="comment" id='comment'>
        
      </div>
    </div>
    )}
    </div> */}
      </div>
    </div>
    
  )
}

// Có mồi function backend rồi á

export default Task