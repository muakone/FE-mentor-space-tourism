import React from 'react'
import { NavLink } from 'react-router-dom'

const NavTab = () => {
  return (
    <nav className='pageNav'>
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