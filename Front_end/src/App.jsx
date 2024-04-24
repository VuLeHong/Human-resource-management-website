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



function App() {

  return (
    <div className='grid-container'>

      
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>

          <Route path='/' element={<Profile/>}/>
          <Route path='/task' element={<Task/>}/>
          <Route path='/ranking' element={<Ranking />}/>
          <Route path='/project' element={<Project />}/>
        </Routes>
      {/* <Home /> */}
      </BrowserRouter>
      
    </div>
  )
}

export default App