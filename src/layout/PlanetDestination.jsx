import React from 'react'

const PlanetDestination = ({name, click, active}) => {
  return (
    <div className={`destinationroute ${active === name ? 'active' : '' }`} onClick={click}>
        <p>{name}</p>
    </div>
  )
}

export default PlanetDestination