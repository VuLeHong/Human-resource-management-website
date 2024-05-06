import './Ranking.css'
import axios from "axios";
import { React, useState, useEffect } from 'react';
import Header from '../head/Header'
import Sidebar from '../sidebar/Sidebar'

const Ranking = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5000/home");
      //console.log(response.data)
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
<<<<<<< HEAD
      //console.error(error.message);
=======

      console.error(error.message);
>>>>>>> ae5108146957ae4ec99f2b5070ee995651e694d3
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const statsMap = users.map(employee => ({
    "organizational_skill": employee.stats.organizational_skill, 
    "techical_skill": employee.stats.techical_skill,
    "idea_contribution": employee.stats.idea_contribution,
    "communication_skill": employee.stats.communication_skill,
    "product_optimization": employee.stats.product_optimization
  }))
  
  const sumArr = []
  statsMap.forEach(obj => {
    let objSum = 0
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        objSum += obj[key]
      }
    }
    sumArr.push(objSum)
  })
  
   let rankedArr = users.map((arr, index) => ({
     ...arr,
     rank: index + 1
   }))
  for (let i = 0; i < sumArr.length; i++) {
    users[i].score = (users[i].score || 0) + sumArr[i]
  }
  users.sort((a, b) => b.score - a.score)
  const auth = localStorage.getItem("user");
  const auth1 = JSON.parse(auth);
  const avatar = "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais";
  //console.log(rankedArr);
  return (
    <div className='grid-container'>  
      <Header />
      <Sidebar />
      <div className='ranking'>
        <div className="title">
          <h1>Hello {auth1.truename}, here is your total stats!</h1>
        </div>
        <div className="rank">
          <div className="rank-number">
            <h1>{auth1.rank}</h1>
          </div>
          <div className="profile-comp">
              <div className="avatar">
                <img src={avatar} alt="" width='70' height='70' />
              </div>
              <div className="name">
                <p>{auth1.truename}</p>
              </div>
          </div>
          <div className="total">
            <h3>{auth1.stats.organizational_skill + auth1.stats.techical_skill + auth1.stats.idea_contribution + auth1.stats.communication_skill + auth1.stats.product_optimization}</h3>
          </div>
        </div>
        <div className='leaderboard'>
          <div className="subTitle">
            <h1>Leaderboard</h1>
          </div>
          <div className="dashboard">
            <div className="div-comp rank-num">
                <h1>No.</h1>
            </div>
            <div className="div-comp truename">
              <p>Employee</p>
            </div>
            <div className="div-comp role">
              <p>Role</p>
            </div>
            <div className="div-comp score">
              <h3>Score</h3>
            </div>
          </div>
          {rankedArr.map(user =>(
          <div className="leader">
            <div className="rank-no">
              <h1>{user.rank}</h1>
            </div>
            <div className="avt-and-name">
              <div className="avt">
                <img src={avatar} width='70' height='70' />
              </div>
              <div className="profile-name">
                <p>{user.truename}</p>
              </div>
            </div>
            <div className="role">
              <p>{user.role}</p>
            </div>
            <div className="score">
              <h3>{user.stats.organizational_skill + user.stats.techical_skill + user.stats.idea_contribution + user.stats.communication_skill + user.stats.product_optimization}</h3>
            </div>
          </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default Ranking;