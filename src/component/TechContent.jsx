import React from 'react'

const TechContent = ({data}) => {
  return (
    <div className='techTextContainer'>
        <small className='role'>The Terminology...</small>
        <p className='name'>{data.name}</p>
        <div className="description">
            <p>{data.description}</p>
        </div>
    </div>
  )
}

export default TechContent