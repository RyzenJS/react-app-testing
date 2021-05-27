import React from 'react';
import './Home.css';
import Veg from './vege.mp4';

function Home() {
  return(
    <>
    <div className='Homepage-body'>
      <header className='moving-banner'>
        <div className='video-container'>
          <video src={Veg} autoplay autoplay muted loop></video>
        </div>
        <div className='moving-banner-content'>
          <h1>Vegetables</h1>
          <h3>Full screen video landing page</h3>
        </div>
      </header>

      <h1>About</h1>

    </div>
    </>
  )
}

export default Home;
