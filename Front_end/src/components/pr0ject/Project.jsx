<<<<<<< HEAD
import React from 'react'
import Header from '../head/Header'
import Sidebar from '../sidebar/Sidebar'

const Project = () => {
  return (
    <>
      <Header />
      <Sidebar />
    <div>
      <h1>Hello VSCode</h1>
    </div>
    </>
    
=======
import React, { useState } from 'react'
import "./Project.css"
import { } from 'react-icons/bs'
import { IoSearchSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";



const Project = () => {

  const [tasks, setTasks] = useState(["Making Front_end", "Merge", "DCM"]);
  const [newTask, setNewTask] = useState("");
  const commentEl = document.getElementById("commentEl");

  const commentTask = () => {
    return null;
  }

  return (
    <div className='project'>

        <button className='create' onClick="">
          <FaPlus />
          Create Project
        </button>

      <div>
        {tasks.map((task, index) =>
          <div key={index} className="view-project-btn">
            <div className="project-list">
              <div className='task-name'>
                <h1 className="text">{task}</h1>
              </div>
              <div className="btn">
                <button className='move-btn' onClick="">
                  View Details <IoSearchSharp />
                </button>
              </div>
            </div>
            <div className="comment" id='comment'>

            </div>
          </div>
        )}
      </div>

    </div>
>>>>>>> a407ca35f8a8ecd40754ebdebcffcc1dca86a8b7
  )
}

export default Project
