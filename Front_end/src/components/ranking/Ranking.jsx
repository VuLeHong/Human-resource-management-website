import user from '../profile/mockData'
import './Ranking.css'
import axios from "axios";
import { React, useState, useEffect } from 'react';

function Rank() {

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([user]);

  const getUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:5000/home");
      console.log(response.data)
      setUsers(response.data);
      setIsLoading(false);
    } catch (error) {
      toast.error(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
}

const Ranking = () => {

  const avatar = "https://img.freepik.com/premium-vector/man-avatar-profile-picture-vector-illustration_268834-541.jpg?size=338&ext=jpg&ga=GA1.1.735520172.1711411200&semt=ais";

  return (
    <div className='ranking'>
        <div className="title">
          <h1>Hello {user[user.length - 1].truename}, here is your total stats!</h1>
        </div>
        <div className="rank">
          <div className="rank-number">
            <h1>{user.indexOf(user[user.length - 1]) + 1}</h1>
          </div>
          <div className="avatar">
            <img src={avatar} alt="" width='70' height='70' />
          </div>
          <div className="name">
            <p>{user[user.length - 1].truename}</p>
          </div>
          <div className="total">
            <h3>{user[user.length - 1].score}</h3>
          </div>
        </div>
        <div className='ladderboard'>
          <div className="subTitle">
            <h1>Leaderboard</h1>
          </div>
          <div className="dashBoard">
            {user.map(() => 
              <div></div>
            )}
          </div>
        </div>
    </div>
//   return (
//     <div className='ranking-container'>
//         <h2>Ranking</h2>
//           <div className='ranking'>
//           {
//             users.length === 0 ?
//             <div><h2>No Ranking</h2></div>
//             :
//             users.map(user =>(
//                 <div>
//                     <p>{user.truename}</p>
//                     <p>{user.role}</p>
//                     <p>{user.rank}</p>
//                 </div>
//             ))
//           }
//           </div>
//       </div>

  )
}

export default Ranking;