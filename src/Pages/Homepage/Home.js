import React from 'react';
import {Button, Row, Col, Divider} from 'antd';
import {Link} from 'react-router-dom';
import Leafy from './Leafy.mp4';
import Navbar from '../Navbar';
import './Home.css';

const style = { background: '#446B40', padding: '8px 0' };

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
          <a href='#product'><Button className='banner-btn'>Read More</Button></a>
        </div>
      </header>

      <div id='product' className='content-container'>
        <blockquote>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </blockquote>

        <div className='product-container'>
          <Divider orientation="left"><h2>All Products</h2></Divider>
          <Row>
            <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }}>
              1 col-order-responsive
            </Col>
            <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }}>
              2 col-order-responsive
            </Col>
            <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }}>
              3 col-order-responsive
            </Col>
            <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }}>
              4 col-order-responsive
            </Col>
          </Row>
        </div>
      </div>

      <footer className='footer-container'>
        <div className='footer-content'>
          <h2>Contact Us. Say Hello</h2>
          <a target='_blank' rel='noreferrer noopener nofollow'><h1>gmail@gmail.com</h1></a>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Home;
