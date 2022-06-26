import React, { useState } from "react";
import Header from "../layout/Header";
import data from "../data.json";
import CrewContent from "../component/CrewContent";
import CrewNav from "../layout/CrewNav";

const Crew = () => {
  const [currentData, setCurrentData] = useState(
    data.crew.filter((data) => data.name === "Douglas Hurley")
  );
  const [active, setActive] = useState("Douglas Hurley");
  const handleDestination = (name) => {
    setCurrentData(data.crew.filter((data) => data.name === name));
    setActive(name);
  };
  return (
    <div className="crewContainer">
      <Header />
      <main className="crewContentContainer">
        <header className="crewHeader">
          <strong className="notHomeHeader">02</strong>
          <p className="notHomeHeader">Meet your crew</p>
        </header>
        <section className="mainCrewContent">
          <div className="flex-reverse">
            <div className="crewContent">
              {currentData &&
                currentData.map((data, index) => (
                  <div className="aboutCrewContainer" key={index}>
                    <div className="destinationPara">
                      <CrewContent data={data} />
                    </div>
                  </div>
                ))}
            </div>
            <nav className="crewNav">
              {data.crew.map((datas, index) => (
                <CrewNav
                  click={() => handleDestination(datas.name)}
                  key={index}
                  name={datas.name}
                  active={active}
                />
              ))}
            </nav>
          </div>
          <div className="crewImage">
            <div>
              {currentData &&
                currentData.map((data, index) => (
                  <img src={data.images.png} alt="data-images" key={index} />
                ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Crew;
