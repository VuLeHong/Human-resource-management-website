import React, { useEffect, useState } from 'react'
import './Profile.css'
import Header from '../head/Header'
import Sidebar from '../sidebar/Sidebar'
import axios from 'axios' 

function Profile (){
  const [owner, setOwner] = useState({});
  const avatar = "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais";
  const auth = localStorage.getItem("user");
  const auth1 = JSON.parse(auth);

  
  
   useEffect(() => {
    axios.post('http://localhost:5000/get', {user_id: auth1.user_id}) 
    .then(result => {
            setOwner(result.data)
            console.log(owner.stats)
    })
    .catch(err => console.log(err))
  },[])


  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
        <div className='contain'>
      <div className='profile-container'>
        <div className="profile">
          <div className='avatar'>
            <img src={avatar} height="250" width="250" alt="" />
          </div>
          <div className='details'>
            <div className="left">
              <div className="name">
                <p>Name : {owner.truename}</p>
              </div>
              <div className="gender">
                {owner.ismale === true ? <p>Gender : Male</p> : <p>Gender: Female</p>}
              </div>
              <div className="staff">
                <p>Role/Dept : {owner.role}</p>
              </div>
              <div className='process'>
                <p>Rank : {owner.rank}</p>
                <div className="progress-bar">
                  <progress value="50" max="100"></progress>
                  <p>50/100</p>
                </div>
              </div>
            </div>
          </div>
          <div className='stats'>
            <ul>
              <p className='job'>STATS : </p>
              <li>Organizational skill: {owner.stats === undefined ? auth1.stats.organizational_skill : owner.stats.organizational_skill}</li>
              <li>Technology skill: {owner.stats === undefined ? auth1.stats.techical_skill : owner.stats.techical_skill}</li>
              <li>Idea contribution: {owner.stats === undefined ? auth1.stats.idea_contribution : owner.stats.idea_contribution}</li>
              <li>Communication skill: {owner.stats === undefined ? auth1.stats.communication_skill : owner.stats.communication_skill}</li>
              <li>Product Optimization: {owner.stats === undefined ? auth1.stats.product_optimization : owner.stats.product_optimization}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default Profile