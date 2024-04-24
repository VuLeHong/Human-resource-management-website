import React, { useState } from 'react'
import "./Task.css"
import user from '../profile/mockData';

const ToDoList = () => {

  const [tasks, setTasks] = useState(["Eat breakfast", "Take a shower", "Walk the dog"]);
  const [newTask, setNewTask] = useState("");
  const commentEl = document.getElementById("commentEl");

  const commentTask = () => {
    return null;
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
                <button className='comment-btn' onClick={commentTask()}>
                    Comment
                </button>
                <button className='move-btn' onClick="">
                    Upload
                </button>
              </div>
            </div>
            <div className="comment" id='comment'>
              
            </div>
        </div>
      )}
      </div>

    </div>

// function Task() {
//     const [tasks, setTasks] = useState([])
//     const auth = localStorage.getItem("user");
//     const auth1 = JSON.parse(auth);
//     const t = auth1.tasks;
    

//   return (
//     <div className='tasking'>
//         {
//             t.length === 0 ?
//             <div><h2>No Task</h2></div>
//             :
//             t.map(task =>(
//                 <div>
//                     <p>{task.content}</p>
//                 </div>
//             ))
//         }
//     </div>
  )
}

// Có mồi function backend rồi á

export default ToDoList
