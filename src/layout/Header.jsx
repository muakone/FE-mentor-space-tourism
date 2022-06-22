import React from 'react'
import NavTab from '../component/NavTab'

const Header = () => {
  return (
    <div className='header'>
        <div className="navBrand">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className='headerSvg'><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </div>
        <span></span>
        <NavTab />
    </div>
  )
}

export default Header