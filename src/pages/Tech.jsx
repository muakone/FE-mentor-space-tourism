import React, { useState } from 'react'
import Header from '../layout/Header'
import data from '../data.json'
import TechNav from '../layout/TechNav'
import TechContent from '../component/TechContent'

const Tech = () => {
  const [currentData, setCurrentData] = useState(
    data.technology.filter((data) => data.name === "Launch vehicle")
)
const [active, setActive] = useState("Launch vehicle")
const handleDestination = (name) => {
    setCurrentData(data.technology.filter((data) => data.name === name))
    setActive(name)
}
  return (
    <div className="techContainer">
      <Header />
      <main className="mainTech">
        <header className="techHeader">
          <strong>03</strong><p>space launch 101</p>
        </header>
        <section>
        <nav className='techNav'>
                    {data.technology.map((datas, index) => (
                        <TechNav click={() => handleDestination(datas.name)} key={index} name={datas.name} id={datas.id} active={active} />
                    ))}
        </nav>
        {currentData &&
          currentData.map((data, index) => (
            <div className="aboutTech" key={index}>
              <div className="techText">
                <TechContent data={data} />
              </div>
              <div className="techImage">
                <img src={data.images.portrait} alt="" />
              </div>
            </div>
          ))
        }
        </section>
      </main>
    </div>
  )
}

export default Tech