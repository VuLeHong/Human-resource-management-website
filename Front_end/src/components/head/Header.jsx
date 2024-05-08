import React from 'react'
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle} from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
const logout = ()=>{
  localStorage.clear();
}
function Header() {
  return (
    <header className='header'>
        <div className='header-right'>
            <button>
              <button>
              <Link to='/'><a onClick={logout}>Logout</a></Link>
              </button>
            </button>
        </div>
    </header>
  )
}

export default Header