import { useState } from 'react'
import './App.css'
import Header from './components/head/Header'
import Sidebar from './components/sidebar/Sidebar'
// import Home from './Home'
import Profile from './components/profile/Profile'
import Task from './components/task/Task'
import Ranking from './components/ranking/Ranking'
import Project from './components/pr0ject/Project'


function App() {

  return (
    <div className='grid-container'>
      <Header />
      <Sidebar />
      {/* <Home /> */}
      <Profile /> 
      <Task />
      {/* <Ranking />
      <Project /> */}
    </div>
  )
}

export default App