import React from 'react';
import Leafy from '../../../images/screen/Leafy.mp4';
import {Button} from 'antd';
import './Header.css';

function Header() {
  return (
    <>
    <header className='screen'>
      <div className='video-container'>
        <video src={Leafy} autoPlay muted loop></video>
      </div>

      <div className='screen-content'>
        <h1 className='header-h1'>Vegetables</h1>
        <h3 className='header-h3'>Full screen video landing page</h3>
      </div>
      <a href="#product"><Button className='screen-btn'>Read More</Button></a>
    </header>
    </>
  )
}

export default Header;
