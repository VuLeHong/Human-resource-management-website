import { BsChat, BsFillFolderFill, BsFillSendFill } from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import './Task.css'
import Header from '../head/Header'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios' 

function Task() {
    const [tasks, setTasks] = useState([]);

    const [show, setShow] = useState(Array(tasks.length).fill(false))

    // const toggle = (index) => {
    //   setShow(show.map((item, i) => {
    //     return i === index ? !item : item
    //     // console.log(1)
    //   }))
    // }

    // const toggle = (index) => {
    //   console.log("Toggle function called with index:", index);
    //   setShow(show.map((item, i) => {
    //     const updatedItem = i === index ? !item : item;
    //     console.log(`Item at index ${i} - updated: ${updatedItem}`);
    //     return updatedItem;
    //   }));
    // };
    
    const toggle = (index) => {
      setShow(prevShow => {
        const updatedShow = [...prevShow];
        updatedShow[index] = !updatedShow[index];
        return updatedShow;
      });
    };

    const auth = localStorage.getItem("user");
    const auth1 = JSON.parse(auth);
    useEffect(() => {
      axios.post('http://localhost:5000/get', {username: auth1.username}) 
      .then(result => {
        setTasks(result.data.tasks)
        console.log(result.data.tasks)
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
        <div>
          {tasks.map((task, index) =>(
              <div key={index} className="separate-btn">
                <div className="task-list">
                  <div className='task-name'>
                    <p className={task.isdone ? "line_through text" : "text"}>{task.content}</p>
                  </div>
                  <div className="btn">
                    <button className='comment-btn' onClick={() => { console.log("Clicked comment button for index:", index); toggle(index)}}>Comment<BsChat className='icons'/></button>
                    <button className='move-btn' onClick={() => {}}>Upload<BsFillFolderFill className='icons'/></button>
                  </div>
                </div>
                {show[index] &&
                  <div className="comment">
                    <div className="comment-div">
                      <input type="text" placeholder='Comment here...' id="" />
                      <button className='btn-send' type="submit" onClick={() => {}}><BsFillSendFill /></button>
                    </div>
                  </div>
                }
            </div>
          )

          )}
        </div>
      </div>
    </div>
  )
}

export default Task