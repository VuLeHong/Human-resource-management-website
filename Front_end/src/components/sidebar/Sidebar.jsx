import React from 'react'
import { BsFillPersonFill, BsListTask, BsClipboard2Pulse, BsFillArchiveFill } from 'react-icons/bs'
import logo from '../../assets/logo-white.png'

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
                    <BsFillPersonFill className='icon'/> Profile
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BsListTask className='icon'/> Tasks
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsClipboard2Pulse className='icon'/> Ranking
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsFillArchiveFill className='icon'/> Project
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar