import React from 'react';
import {BackTop} from 'antd';
import Header from '../components/Header/Header';
import AboutUs from '../components/AboutUs/AboutUs';
import OurProduct from '../components/OurProduct/OurProduct';
import Footer from '../components/Footer/Footer';
import './Home.css';

const backtopstyle = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#446B40',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

function Home() {
  return(
      <div className='Homepage-body'>
        <Header />
        <AboutUs />
        <OurProduct />
        <Footer />
      </div>
  )
}

export default Home;

// <BackTop duration={150}><div style={backtopstyle}>Up</div></BackTop>
