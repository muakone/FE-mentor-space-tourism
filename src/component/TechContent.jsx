import React from 'react'

const TechContent = ({data}) => {
  return (
    <div className='techTextContainer'>
        <small className='role'>The Terminology...</small>
        <p className='name tech_crewName'>{data.name}</p>
        <div className="description">
            <p className='para'>{data.description}</p>
        </div>
    </div>
  )
}

export default TechContent