import React from 'react'
import Header from '../layout/Header'

const Home = () => {
  return (
    <div className='homeContainer'>
        <Header />
        <section className='travelSpaceContainer'>
            <div className="travelSpaceText">
                <p className='travel'>so you want to travel to</p>
                <p className='space'>space</p>
                <div className="spaceText">
                    <p className='para'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
            </div>
            <div className='exploreBtnContainer'>
                <div className="exploreBtn">
                    <button>explore</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home