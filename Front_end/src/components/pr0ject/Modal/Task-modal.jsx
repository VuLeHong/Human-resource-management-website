
import React, { useEffect, useState } from "react";
import "./Task-modal.css";
import { IoMdClose } from "react-icons/io";
import axios from 'axios'
import Checkdone_modal from "./Checkdone-modal";

import { MdCheckBox } from "react-icons/md"

const Task_modal = (data) => {
  const [checkIsDone, setCheckIsDone] = useState(false)
  const [tasks, setTasks] = useState([]);
  const [modal, setModal] = useState(false);
  const [content, setContent] = useState();
  const [rank, setRank] = useState();
  const [user_id, setUser_id] = useState();
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  useEffect(() => {
    axios.get('http://localhost:5000/gettasks') 
    .then(result => {
      setTasks(result.data)
    })
    .catch(err => console.log(err))
  }, [])
   const handleAdd = () => {
     axios.post('http://localhost:5000/addtask', {content:content, rank:rank, Project_id: data.project_id, user_id:user_id})
     .then(result=> {
       if(result){
         location.reload()
       }
     })
     .catch(err => console.log(err))
 }
  return (
    <>
      <button onClick={toggleModal} className="open-button">
        Create Task
      </button>
      {tasks.map((task, index) => (
        task.Project_id === data.project_id &&
        <div className="task-project-component">
          <div key={index} className="btn1">
            <div className="content-and-desc">
              <p className="check">{task.content}</p>
            </div>
            <div className="rank-taskproj">
              <p className="check">Rank: {task.rank}</p>
            </div>
          </div>
          <div className="downtask">
                <div className="chatbox">
                  {
                    task.t_desc === ""
                    ?
                    <p>Comment: No comment</p>
                    :
                    <p>Comment: {task.t_desc}</p>
                  }
                </div>
                <div className="isdonetask">
                  {
                    task.ans === ""
                    ?
                    <p>Result: No result</p>
                    :
                    <>
                      <p>Result: {task.ans}</p>
                      {task.isdone === true 
                      ? 
                      <div className="btn-check"><MdCheckBox className="non-tick" /></div>
                      :
                      <Checkdone_modal content = {task.content} rank = {task.rank} isdone = {task.isdone} user_id = {task.user_id} task_id = {task._id}/>
                      } 
                    </>
                  }
                </div>
            </div>
        </div>
  ))}
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="title-project">
                <h2>Create Task</h2>
                <button className="close-modal" onClick={toggleModal}>
                <IoMdClose />
                </button>
            </div>
            <form onSubmit={handleAdd}>
                <div className="name-project">
                    <p className="text-label" htmlFor="">Content :</p>
                    <input type="text" placeholder="Name of project" onChange={ (e) => setContent(e.target.value)} required autoFocus/>
                </div>
                <div className="desc-project">
                    <label className="text-label" htmlFor="">Rank :</label>
                    {/* <input type="text" placeholder="Rank" list="rank" onChange={ (e) => setRank(e.target.value)} required/> */}
                    <select id="rank" onChange={ (e) => setRank(e.target.value) } required>
                      <option value="S">S</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                      <option value="D">D</option>
                      <option value="E">E</option>
                    </select>
                </div>

                <div className="desc-project">
                    <label className="text-label" htmlFor="">User-id task  :</label>
                    <input type="text" placeholder="User-id task" onChange={ (e) => setUser_id(e.target.value)} required />
                </div>
                <div className="create-project">
                    <button className="create-project1">Create task</button>
                </div>
            </form>
            
          </div>
        </div>
      )}
    </>
  );

}

export default Task_modal