import React from 'react'

const AboutDestination = ({data}) => {
  return (
    <div className='aboutDestination'>
        <p className='aboutHeader'>{data.name}</p>
        <div className="about">
            <p>{data.description}</p>
        </div>
        <div className="time">
            <div className="details">
                <p className="avgDistance">Avg. Distance</p>
                <p className='distance'>{data.distance}</p>
            </div>
            <div className="details">
                <p className="avgDistance">Est. Travel Time</p>
                <p className='distance'>{data.travel}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutDestination