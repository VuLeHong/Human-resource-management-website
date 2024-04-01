import { useState, React, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
function App() {
  const current_theme = localStorage.getItem('current_theme')
  const [theme, setTheme] = useState(current_theme?
    current_theme : 'light');

    useEffect(() => {
      localStorage.setItem('current_theme', theme)
    }, [theme])

  return (
    <>
      <div>
        <div className={`container ${theme}`}>
          <Navbar theme={theme} setTheme={setTheme} />
          <Home/>
        </div>
        {/* <Home/> */}
      </div>
    </>
  )
}

export default App;
