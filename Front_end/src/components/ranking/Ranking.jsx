import './Ranking.css'
import axios from "axios";
import { React, useState, useEffect } from 'react';

function Ranking() {

  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

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

  return (
    <div className='ranking-container'>
        <h2>Ranking</h2>
          <div className='ranking'>
          {
            users.length === 0 ?
            <div><h2>No Ranking</h2></div>
            :
            users.map(user =>(
                <div>
                    <p>{user.truename}</p>
                    <p>{user.role}</p>
                    <p>{user.rank}</p>
                </div>
            ))
          }
          </div>
      </div>
  )
}

export default Ranking