import React, { useState, useEffect } from "react";
import Header from "../layout/Header";
import data from "../data.json";
import TechNav from "../layout/TechNav";
import TechContent from "../component/TechContent";

const Tech = () => {
  const [currentData, setCurrentData] = useState(
    data.technology.filter((data) => data.name === "Launch vehicle")
  );
  const [active, setActive] = useState("Launch vehicle");
  const handleDestination = (name) => {
    setCurrentData(data.technology.filter((data) => data.name === name));
    setActive(name);
  };

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const width = windowSize.innerWidth;

  return (
    <div className="techContainer">
      <Header />
      <main className="mainTech">
        <header className="techHeader">
          <strong className="notHomeHeader">03</strong>
          <p className="notHomeHeader">space launch 101</p>
        </header>
        <section>
          <div className="techDescription">
            <nav className="techNav">
              {data.technology.map((datas, index) => (
                <TechNav
                  click={() => handleDestination(datas.name)}
                  key={index}
                  name={datas.name}
                  id={datas.id}
                  active={active}
                />
              ))}
            </nav>
            {currentData &&
              currentData.map((data, index) => (
                <div className="aboutTech" key={index}>
                  <div className="techText">
                    <TechContent data={data} />
                  </div>
                </div>
              ))}
          </div>
          <div>
            <div className="techImage">
              {currentData &&
                currentData.map((data, index) =>
                  width < 768 || width === 768 ? (
                    <img
                      src={data.images.landscape}
                      alt="data-images"
                      key={index}
                    />
                  ) : (
                    <img
                      src={data.images.portrait}
                      alt="data-images"
                      key={index}
                    />
                  )
                )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Tech;
