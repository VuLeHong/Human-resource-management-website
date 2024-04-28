import rankedArr from '../profile/mockData';
import './Ranking.css'
import axios from "axios";
import { React, useState, useEffect } from 'react';

function Rank() {

  const [users, setUsers] = useState([])

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
          <h1>Hello {rankedArr[rankedArr.length - 1].truename}, here is your total stats!</h1>
        </div>
        <div className="rank">
          <div className="rank-number">
            <h1>{rankedArr[rankedArr.length - 1].rank}</h1>
          </div>
          <div className="profile-comp">
              <div className="avatar">
                <img src={avatar} alt="" width='70' height='70' />
              </div>
              <div className="name">
                <p>{rankedArr[rankedArr.length - 1].truename}</p>
              </div>
          </div>
          <div className="total">
            <h3>{rankedArr[rankedArr.length - 1].score}</h3>
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
          <div className="leader">
            <div className="rank-no">
              <h1>{rankedArr[rankedArr.length - 1].rank}</h1>
            </div>
            <div className="avt-and-name">
              <div className="avt">
                <img src={avatar} width='70' height='70' />
              </div>
              <div className="profile-name">
                <p>{rankedArr[rankedArr.length - 1].truename}</p>
              </div>
            </div>
            <div className="role">
              <p>{rankedArr[rankedArr.length - 1].role}</p>
            </div>
            <div className="score">
              <h3>{rankedArr[rankedArr.length - 1].score}</h3>
            </div>
          </div>
          <div className="leader">
            <div className="rank-no">
              <h1>{rankedArr[rankedArr.length - 1].rank}</h1>
            </div>
            <div className="avt-and-name">
              <div className="avt">
                <img src={avatar} width='70' height='70' />
              </div>
              <div className="profile-name">
                <p>{rankedArr[rankedArr.length - 1].truename}</p>
              </div>
            </div>
            <div className="role">
              <p>{rankedArr[rankedArr.length - 1].role}</p>
            </div>
            <div className="score">
              <h3>{rankedArr[rankedArr.length - 1].score}</h3>
            </div>
          </div>
          <div className="leader">
            <div className="rank-no">
              <h1>{rankedArr[rankedArr.length - 1].rank}</h1>
            </div>
            <div className="avt-and-name">
              <div className="avt">
                <img src={avatar} width='70' height='70' />
              </div>
              <div className="profile-name">
                <p>{rankedArr[rankedArr.length - 1].truename}</p>
              </div>
            </div>
            <div className="role">
              <p>{rankedArr[rankedArr.length - 1].role}</p>
            </div>
            <div className="score">
              <h3>{rankedArr[rankedArr.length - 1].score}</h3>
            </div>
          </div>
          <div className="leader">
            <div className="rank-no">
              <h1>{rankedArr[rankedArr.length - 1].rank}</h1>
            </div>
            <div className="avt-and-name">
              <div className="avt">
                <img src={avatar} width='70' height='70' />
              </div>
              <div className="profile-name">
                <p>{rankedArr[rankedArr.length - 1].truename}</p>
              </div>
            </div>
            <div className="role">
              <p>{rankedArr[rankedArr.length - 1].role}</p>
            </div>
            <div className="score">
              <h3>{rankedArr[rankedArr.length - 1].score}</h3>
            </div>
          </div>
          <div className="leader">
            <div className="rank-no">
              <h1>{rankedArr[rankedArr.length - 1].rank}</h1>
            </div>
            <div className="avt-and-name">
              <div className="avt">
                <img src={avatar} width='70' height='70' />
              </div>
              <div className="profile-name">
                <p>{rankedArr[rankedArr.length - 1].truename}</p>
              </div>
            </div>
            <div className="role">
              <p>{rankedArr[rankedArr.length - 1].role}</p>
            </div>
            <div className="score">
              <h3>{rankedArr[rankedArr.length - 1].score}</h3>
            </div>
          </div>
          <div className="leader">
            <div className="rank-no">
              <h1>{rankedArr[rankedArr.length - 1].rank}</h1>
            </div>
            <div className="avt-and-name">
              <div className="avt">
                <img src={avatar} width='70' height='70' />
              </div>
              <div className="profile-name">
                <p>{rankedArr[rankedArr.length - 1].truename}</p>
              </div>
            </div>
            <div className="role">
              <p>{rankedArr[rankedArr.length - 1].role}</p>
            </div>
            <div className="score">
              <h3>{rankedArr[rankedArr.length - 1].score}</h3>
            </div>
          </div>
            {/* <div className='rank-index'>
              {user.forEach((employee) => {
                <>
                  <div className="rank-num">
                    <h1>{employee.rank}</h1>
                  </div>
                  <div className="avt">
                    <img src={avatar} alt="" />
                  </div>
                  <div className="truename">
                    <p>{employee.truename}</p>
                  </div>
                  <div className="role">
                    <p>{employee.role}</p>
                  </div>
                  <div className="score">
                    <h3>{employee.score}</h3>
                  </div>
                </>
              })} Khong hien thi du lieu nhan vien
            </div> */}
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