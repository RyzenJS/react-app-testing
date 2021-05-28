import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
import Leafy from './Leafy.mp4';
import Navbar from '../Navbar';
import './Home.css';

function Home() {
  return(
    <>
    <div className='Homepage-body'>
      <header className='moving-banner'>
        <div className='video-container'>
          <Navbar />
          <video src={Leafy} autoPlay muted loop></video>
        </div>
        <div className='moving-banner-content'>
          <h1>Vegetables</h1>
          <h3>Full screen video landing page</h3>
          <a href='#about'><Button className='banner-btn'>Read More</Button></a>
        </div>
      </header>

      <div id='about' className='content-container'>
        <h1>About</h1>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </blockquote>

      </div>

      <footer className='footer-container'>
        <div className='footer-content'>
          <h2>Let's talk. Say Hello</h2>
          <a target='_blank' rel='noreferrer noopener nofollow'><h1>gmail@gmail.com</h1></a>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Home;
