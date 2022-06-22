import React from 'react'

const TechNav = ({id, active, name, click}) => {
  return (
    <div className= {`techRoute ${active === name ? 'active' : '' }`} onClick={click}>{id}</div>
  )
}

export default TechNav