import React, { useEffect, useState } from 'react'
import Header from '../layout/Header'
import data from '../data.json'
import PlanetDestination from '../layout/PlanetDestination'
import AboutDestination from '../component/AboutDestination'


const Destination = () => {
    const [currentData, setCurrentData] = useState(
        data.destinations.filter((data) => data.name === "Moon")
    )
    const [active, setActive] = useState("Moon")
    const handleDestination = (name) => {
        setCurrentData(data.destinations.filter((data) => data.name === name))
        setActive(name)
    }
  /*  useEffect(() => {
        const menuActiveCard = document
            .querySelector(".destinationPlanet")
            .querySelectorAll(".destinationroute");
        
        
        function setMenuActiveCard () {
            
            menuActiveCard.forEach((n) => n.classList.remove("active"));
            this.classList.add("active");
        }
        menuActiveCard.forEach((n) =>
      n.addEventListener("click", setMenuActiveCard)
    );
    }, []) */
    
   /* useEffect(() => {
        const menuActiveCard = document
      .querySelector(".rowContainer")
      .querySelectorAll(".rowMenuCard");

    function setMenuActiveCard() {
      menuActiveCard.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuActiveCard.forEach((n) =>
      n.addEventListener("click", setMenuActiveCard)
    );
    }, []) */
  return (
    <div className="destinationContainer">
        <Header />
        <div className="pickDestination">
            <header className="destinationHeader">
                <strong>01</strong><p>pick your destination</p>
            </header>
            <section>
                <nav className='destinationPlanet'>
                    {data.destinations.map((datas, index) => (
                        <PlanetDestination click={() => handleDestination(datas.name)}  name={datas.name} key={index} active={active} />
                    ))}
                </nav>
                {currentData && 
                currentData.map((data, index) => (
                    <div className='aboutDestinationContainer' key={index}>
                        <div>
                            <img src={data.images.png} alt={data.images.png} />
                        </div>
                        <div className='destinationPara'>
                            <AboutDestination data={data} />
                        </div>
                    </div>
                ))
                }
            </section>
        </div>
    </div>
  )
}

export default Destination