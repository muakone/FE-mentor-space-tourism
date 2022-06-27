import React, {useEffect, useState} from 'react'
import NavTab from '../component/NavTab'

const Header = () => {
  const [toggle, setToggle] = useState(false)
  const toggleNav = () => {
    setToggle(!toggle)
  }
  const getWindowWidth = () => {
    const {innerWidth} = window;
    return {innerWidth};
  }
  const [windowSize, setWindowSize] = useState(getWindowWidth());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowWidth());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
    
  }, []);

  const width = windowSize.innerWidth;

  return (
    <div className='header'>
        <div className="navBrand">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" className='headerSvg'><g fill="none" fillRule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>
        </div>
        <span className='hr-line'></span>
        {
          width > 640 ? 
          <NavTab />
          :
          <div>
            <span onClick={toggleNav} id="toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z"/></g></svg>
            </span>
            
            {
              toggle &&
              <div className="transparent" onClick={toggleNav}>
                <NavTab toggleNav={toggleNav} />
              </div>
               
            }
          </div>
        }
        
    </div>
  )
}

export default Header