import { BsChat, BsFillFolderFill, BsFillSendFill } from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import './Task.css'
import Header from '../head/Header'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios' 
import { FaCloudUploadAlt } from "react-icons/fa";


function Task() {
    const [tasks, setTasks] = useState([]);
    const [cmt, setCmt] = useState();
    const [show, setShow] = useState(Array(tasks.length).fill(false))
    const [upload, setUpload] = useState(Array(tasks.length).fill(false))
    
    const toggle = (index) => {
      setShow(prevShow => {
        const updatedShow = [...prevShow];
        updatedShow[index] = !updatedShow[index];
        return updatedShow;
      });
    };

    const toggleUpload = (i) => {
      setUpload(prevUpload => {
        const updatedUpload = [...prevUpload];
        updatedUpload[i] = !updatedUpload[i];
        console.log(updatedUpload)
        return updatedUpload;
      })
    }

    const auth = localStorage.getItem("user");
    const auth1 = JSON.parse(auth);
    useEffect(() => {
      axios.get('http://localhost:5000/gettasks') 
      .then(result => {
        //console.log(result.data)
        setTasks(result.data)
        //console.log(tasks)
        
      })
      .catch(err => console.log(err))
    }, [])
    const handleCmt = (task_id,cmt) => {
       axios.post('http://localhost:5000/addcmt', {task_id: task_id, t_desc : cmt})
       .then( result=> {
         if(result){
           location.reload()
         }
       })
       .catch(err => console.log(err))
  }
  const [owner, setOwner] = useState({});
  useEffect(() => {
   axios.post('http://localhost:5000/get', {user_id: auth1.user_id}) 
   .then(result => {
           setOwner(result.data)
           //console.log(owner.tasks)
   })
   .catch(err => console.log(err))
 },[])
  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      <div className='todo'>
        <h1 className='title'>UIT Evaluation System</h1>
        {owner.tasks ===undefined  
        ? 
        <div><h2>No task</h2></div>
        :
        owner.tasks.length === 0 
        ?
        <div><h2>No task</h2></div>
        :
        <div>
          {tasks.map((task, index) =>(
              <div key={index} className="separate-btn">
                {task.user_id === owner.user_id ? 
                <div className="task-list">
                  <div className='task-name'>
                    <p className={task.isdone ? "line_through text" : "text"}>{task.content}</p>
                  </div>
                  <div className="btn">
                  <div className="btn2">
                    <button className='comment-btn' onClick={() => {toggle(index)}}>Comment<BsChat className='icons'/></button>
                  </div>
                  <div className="btn3">
                    <button className='move-btn' onClick={() => {toggleUpload(index)}}>Upload <FaCloudUploadAlt className='icons' /></button>
                  </div>
                  </div>
                </div>
                :
                <></>}
                {show[index] &&
                  <div className="comment">
                    <div className="comment-div">
                      <input type="text" placeholder='Comment here...' onChange={ (e) => setCmt(e.target.value)} required/>
                      <button className='btn-send' type="submit" onClick={() => handleCmt(tasks[index]._id,cmt)}><BsChat className='icons'/></button>
                    </div>
                  </div>
                }
                {upload[index] && 
                <div className='upload'>
                  <form action='' method="post" encType="multipart/form-data">
                    <label htmlFor=""></label>
                    <div className='comment-div'>
                    <input type="text" placeholder='Upload here...' name="task_id" required/>
                    <button className='btn-send' type="submit"><FaCloudUploadAlt className='icons' /></button>
                    </div>
                  </form>
                </div>
                }
              </div>
            )
          )}
        </div>} 
      </div>
    </div>
  )
}

export default Task