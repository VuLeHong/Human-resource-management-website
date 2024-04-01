import {React, useState, useEffect} from 'react';
import Task from './Task/Task';
import Rank from './Rank/Rank';
import Navbar from './components/Navbar/Navbar';
function Home() {

  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme?
    current_theme : 'light');

    useEffect(() => {
      localStorage.setItem('current_theme', theme)
    }, [theme])

  return (
    <div>
      <div className={`container ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />
      </div>
      <div className='Home'>
            <Task/>
            <Rank/>   
      </div>
    </div>
  )
}

export default Home;