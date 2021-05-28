import React from 'react';
import './Home.css';
import Leafy from './Leafy.mp4';
import Navbar from '../Navbar';

function Home() {
  return(
    <>
    <div className='Homepage-body'>
      <Navbar />
      
      <header className='moving-banner'>
        <div className='video-container'>
          <video src={Leafy} autoPlay muted loop></video>
        </div>
        <div className='moving-banner-content'>
          <h1>Vegetables</h1>
          <h3>Full screen video landing page</h3>
        </div>
      </header>

      <h1>About</h1>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

    </div>
    </>
  )
}

export default Home;
