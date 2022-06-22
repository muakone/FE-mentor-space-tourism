import React from 'react'

const CrewNav = ({click, active, name}) => {
  return (
    <div className= {`crewRoute ${active === name ? 'active' : '' }`} onClick={click}></div>
  )
}

export default CrewNav