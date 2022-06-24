import React from 'react'

const CrewContent = ({data}) => {
  return (
    <div className='aboutCrew'>
        <p className='role'>{data.role}</p>
        <p className='name tech_crewName'>{data.name}</p>
        <div className="bio">
            <p className='para'>{data.bio}</p>
        </div>
    </div>
  )
}

export default CrewContent