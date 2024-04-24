<<<<<<< Updated upstream
import { useState } from 'react';
import './App.css';
import Home from './components/Home';
=======
import react from 'react'
import './App.css'
import Header from './components/head/Header'
import Sidebar from './components/sidebar/Sidebar'
// import LoginForm from './components/Login/Login'
// import Home from './Home'
import Profile from './components/profile/Profile'
import Task from './components/Task/Task'
import Ranking from './components/ranking/Ranking'
import Project from './components/pr0ject/Project'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LoginForm from './components/Login/Login'



>>>>>>> Stashed changes
function App() {
  return (
<<<<<<< Updated upstream
      <div>
        <Home/>
      </div>
=======
    // <div className='grid-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/task' element={<Task/>}/>
          <Route path='/ranking' element={<Ranking />}/>
          <Route path='/project' element={<Project />}/>
          <Route path='/' element={<LoginForm/>}/>
        </Routes>
      {/* <Home /> */}
      </BrowserRouter>
      
    // </div>
>>>>>>> Stashed changes
  )
}

export default App;
