import React from 'react'
import './Profile.css'
<<<<<<< HEAD
import Header from '../head/Header'
import Sidebar from '../sidebar/Sidebar'
=======
import user from './mockData';
>>>>>>> a407ca35f8a8ecd40754ebdebcffcc1dca86a8b7

const Profile = () => {

  const avatar = "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais";
  const auth = localStorage.getItem("user");
  const auth1 = JSON.parse(auth);

  return (
<<<<<<< HEAD
    <>  
      <Header />
      <Sidebar />
          <div className='contain'>
=======
    <div className='contain'>
>>>>>>> a407ca35f8a8ecd40754ebdebcffcc1dca86a8b7
      <div className='profile-container'>
        <div className="profile">
          <div className='avatar'>
            <img src={avatar} height="250" width="250" alt="" />
          </div>
          <div className='details'>
            <div className="left">
              <div className="name">
<<<<<<< HEAD
                <p>Name: {auth1.truename}</p>
              </div>
              <div className="gender">
                {auth1.ismale === true ? <p>Gender: Male</p> : <p>Gender: Female</p>}
              </div>
              <div className="staff">
                <p>Role/Dept: {auth1.role}</p>
              </div>
              <div className='process'>
                <p>Rank: {auth1.rank}</p>
=======
                {/* <p>Name: {auth1.truename}</p> */}
                <p>Name: {user[user.length - 1].truename}</p>
              </div>
              <div className="gender">
                {/* {auth1.ismale === true ? <p>Gender: Male</p> : <p>Gender: Female</p>} */}
                {user[user.length - 1].ismale === true ? <p>Gender: Male</p> : <p>Gender: Female</p>}
              </div>
              <div className="staff">
                {/* <p>Role/Dept: {auth1.role}</p> */}
                <p>Role/Dept: {user[user.length - 1].role}</p>
              </div>
              <div className='process'>
                {/* <p>Rank: {auth1.rank}</p> */}
                <p>Rank: {user[user.length - 1].rank}</p>
>>>>>>> a407ca35f8a8ecd40754ebdebcffcc1dca86a8b7
                <div className="progress-bar">
                  <progress value="50" max="100"></progress>
                  <p>50/100</p>
                </div>
              </div>
            </div>
          </div>
          <div className='stats'>
            <ul>
              <p>Stats</p>
<<<<<<< HEAD
              <li>Communication skill: {auth1.stats.communication_skill}</li>
              <li>Idea contribution: {auth1.stats.idea_contribution}</li>
              <li>Organizational skill: {auth1.stats.organizational_skill}</li>
              <li>Product Optimization: {auth1.stats.product_optimization}</li>
              <li>Technology skill: {auth1.stats.techical_skill}</li>
=======
              {/* <li>Communication skill: {auth1.stats.communication_skill}</li>
              <li>Idea contribution: {auth1.stats.idea_contribution}</li>
              <li>Organizational skill: {auth1.stats.organizational_skill}</li>
              <li>Product Optimization: {auth1.stats.product_optimization}</li>
              <li>Technology skill: {auth1.stats.techical_skill}</li> */}
              <li>Communication skill: {user[user.length - 1].stats.communication_skill}</li>
              <li>Idea contribution: {user[user.length - 1].stats.idea_contribution}</li>
              <li>Organizational skill: {user[user.length - 1].stats.organizational_skill}</li>
              <li>Product Optimization: {user[user.length - 1].stats.product_optimization}</li>
              <li>Technology skill: {user[user.length - 1].stats.techical_skill}</li>
>>>>>>> a407ca35f8a8ecd40754ebdebcffcc1dca86a8b7
            </ul>
          </div>
        </div>
      </div>
    </div>
<<<<<<< HEAD
    </>

=======
>>>>>>> a407ca35f8a8ecd40754ebdebcffcc1dca86a8b7
  )
}

export default Profile
