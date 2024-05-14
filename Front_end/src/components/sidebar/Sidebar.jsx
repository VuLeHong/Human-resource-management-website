import React from 'react'
import { BsFillPersonFill, BsListTask, BsClipboard2Pulse, BsFillArchiveFill } from 'react-icons/bs'
import logo from '../../assets/logo-white.png'
import { Link, useNavigate } from 'react-router-dom'
import './Sidebar.css'
const auth = localStorage.getItem("user");
const auth1 = JSON.parse(auth);
function Sidebar({openSidebarToggle}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <img src={logo} height = "50" width = "180" />
            </div>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href=''>
                    <Link className='component-icon-list' to='/profile'><BsFillPersonFill className='icon'/> <p>Profile</p></Link>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                <Link className='component-icon-list' to='/task'><BsListTask className='icon'/> <p>Tasks</p></Link>

                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <Link className='component-icon-list' to='/ranking'><BsClipboard2Pulse className='icon'/> <p>Ranking</p></Link>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">   
                    <Link className='component-icon-list'to='/project'><BsFillArchiveFill className='icon'/> <p>Project</p> </Link>
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar