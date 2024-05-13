
import React, { useEffect, useState } from "react";
import "./Task-modal.css";
import {} from "react-icons"
import { IoMdClose } from "react-icons/io";
import axios from 'axios'

const Task_modal = (project_id) => {
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
     axios.post('http://localhost:5000/addtask', {content:content, rank:rank, Project_id: project_id.project_id, user_id:user_id})
     .then( result=> {
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
        task.Project_id === project_id.project_id &&
        <div key={index} className="btn1">
          <div className="content-and-desc">
            <div className="uptask">
              <p className="check">{task.content}</p>
            </div>
            <div className="downtask">
              <div className="chatbox">
                {
                  task.t_desc ===""
                  ?
                  <p>Comment: No comment</p>
                  :
                  <p>Comment: {task.t_desc}</p>
                }
                
              </div>
              <div className="isdonetask">
                {
                  task.ans ===""
                  ?
                  <p>Result: No result</p>
                  :
                  <p>Result: {task.ans}</p>
                }
              </div>
            </div>
          </div>
          <p className="check">Rank: {task.rank}</p>
        </div>
  ))}
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="title-project">
                <h2>Create Project</h2>
                <button className="close-modal" onClick={toggleModal}>
                <IoMdClose />
                </button>
            </div>
            <form onSubmit={handleAdd}>
                <div className="name-project">
                    <p className="text-label" htmlFor="">Content :</p>
                    <input type="text" placeholder="Name of project" onChange={ (e) => setContent(e.target.value)} required />
                </div>
                <div className="desc-project">
                    <label className="text-label" htmlFor="">Rank :</label>
                    <input type="text" placeholder="Rank" onChange={ (e) => setRank(e.target.value)} required/>
                </div>

                <div className="desc-project">
                    <label className="text-label" htmlFor="">User-id task  :</label>
                    <input type="text" placeholder="User-id task" onChange={ (e) => setUser_id(e.target.value)} required />
                </div>
                <div className="create-project">
                    <button className="create-project1">Create project</button>
                </div>
            </form>
            
          </div>
        </div>
      )}
    </>
  );

}

export default Task_modal