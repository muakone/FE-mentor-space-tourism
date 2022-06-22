import React from 'react'

const CrewContent = ({data}) => {
  return (
    <div className='aboutCrew'>
        <p className='role'>{data.role}</p>
        <p className='name'>{data.name}</p>
        <div className="bio">
            <p>{data.bio}</p>
        </div>
    </div>
  )
}

export default CrewContent