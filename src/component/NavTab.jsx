import React from 'react'
import { NavLink } from 'react-router-dom'

const NavTab = ({toggleNav}) => {
  return (
    <nav className='pageNav'>
        <span className='iconClose' id='close' onClick={toggleNav}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z"/><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z"/></g></svg>
        </span>
        <div className="navContainer">
            <NavLink to={'/'} activeclassname="active">
                <div className='navLinks' id='home'>
                    <strong>00</strong>
                    <p>home</p>
                </div>
            </NavLink>
            <NavLink to={'/destination'}>
                <div className='navLinks' id='destination'>
                    <strong>01</strong>
                    <p>destination</p>
                </div>
            </NavLink>
            <NavLink to={'/crew'}>
                <div className='navLinks' id='crew'>
                    <strong>02</strong>
                    <p>crew</p>
                </div>
            </NavLink>
            <NavLink to={'/tech'}>
                <div className='navLinks' id='tech'>
                    <strong>03</strong>
                    <p>technology</p>
                </div>
            </NavLink>
        </div>
    </nav>
  )
}

export default NavTab