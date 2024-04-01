
import { React, useState, useEffect } from 'react';
import Task from './Task/Task';
import Rank from './Rank/Rank';
import Navbar from '../components/Navbar/Navbar';
import Mini_profile from './Mini_profile/Mini_profile'
import './Home.css'
function Home() {

  const current_theme = localStorage.getItem('current_theme');
  const [theme, setTheme] = useState(current_theme ? current_theme : 'light');

  useEffect(() => {
    localStorage.setItem('current_theme', theme)
  }, [theme]);

  return (
    <div>
      <div className={`container ${theme}`}>
           <Navbar theme={theme} setTheme={setTheme} />
          <Mini_profile/>
          <div className='Body'>
            <Task/>
            <Rank/>   
      </div>
      </div>
      

    </div>
  )
}

export default Home;