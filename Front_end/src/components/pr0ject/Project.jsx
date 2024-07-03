import React, { useEffect, useState } from 'react'
import "./Project.css"
import { } from 'react-icons/bs'
import { IoSearchSharp } from "react-icons/io5";
import Sidebar from '../sidebar/Sidebar';
import Header from '../head/Header';
import axios from 'axios' 
import Modal from './Modal/Modal';
import Task_modal from './Modal/Task-modal';
const URL = 'https://rpg-ranking-system.onrender.com';
const Project = () => {

  const [projects, setProjects] = useState([]);

  const [show, setShow] = useState(Array(projects.length).fill(false))

  const toggleProject = (index) => {
    setShow(prevShowProject => {
      const updated = [...prevShowProject]
      updated[index] = !updated[index]
      return updated
    })
  }

  const auth = localStorage.getItem("user");
  const auth1 = JSON.parse(auth);

  useEffect(() => {
    axios.get(`${URL}/getprojects`) 
    .then(result => {
      //console.log(result.data)
      setProjects(result.data)
    })
    .catch(err => console.log(err))
  }, [])
  
  const [owner, setOwner] = useState({});
  useEffect(() => {
   axios.post(`${URL}/get`, {user_id: auth1.user_id}) 
   .then(result => {
           setOwner(result.data)
           //console.log(owner.stats)
   })
   .catch(err => console.log(err))
 },[])

  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <div className='project'>
        <Modal />
        <div>
          {projects.map((project, index) =>
            <div key={index} className="view-project-btn">
              {project.owner_id === owner.user_id ? 
                <div className="project-list">
                  <div className='task-name'>
                    <h1 className="text">{project.name}</h1>
                  </div>
                  <div className="btn3">
                    <button className='move-btn' onClick={() => {toggleProject(index)}}><p>View Details</p> <IoSearchSharp /></button>
                  </div>
                  
                </div>
                :
                <></>}
                {show[index] &&
                  <div className="comment">
                    <Task_modal project_id={projects[index]._id}/>
                    {/* <div className="task-project">
                      <div className="content-project">
                        <h1></h1>
                      </div>
                      <div className="rank-project"></div>
                      <div className="userid-project"></div>
                    </div> */}
                  </div>
                }
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
