import React, { useEffect, useState } from 'react'
import "./Project.css"
import { } from 'react-icons/bs'
import { IoSearchSharp } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Sidebar from '../sidebar/Sidebar';
import Header from '../head/Header';
import axios from 'axios' 

const Project = () => {

  const [projects, setProjects] = useState([]);
  const commentEl = document.getElementById("commentEl");

  const auth = localStorage.getItem("user");
  const auth1 = JSON.parse(auth);

  useEffect(() => {
    axios.get('http://localhost:5000/getprojects') 
    .then(result => {
      console.log(result.data)
      setProjects(result.data)
      
    })
    .catch(err => console.log(err))
  }, [])

  const commentTask = () => {
    return null;
  }

  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <div className='project'>
        <button className='create' onClick=""><FaPlus />Create Project</button>
        <div>
          {projects.map((project, index) =>
            <div key={index} className="view-project-btn">
              {project.owner_id === auth1.user_id ? 
                <div className="project-list">
                  <div className='task-name'>
                    <h1 className="text">{project.name}</h1>
                  </div>
                  <div className="btn">
                    <button className='move-btn' onClick="">View Details <IoSearchSharp /></button>
                  </div>
                </div>
                :
                <></>}
              {/* <div className="comment" id='comment'>
              </div> */}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
