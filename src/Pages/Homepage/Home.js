import React from 'react';
import {BackTop} from 'antd';
import AppContainer from '../../utils/AppContainer';
import Navbar from '../Navbar';
import Header from '../components/Header/Header';
import AboutUs from '../components/AboutUs/AboutUs';
import OurProduct from '../components/OurProduct/OurProduct';
import Footer from '../components/Footer/Footer';
import {ProductData} from '../OurProduct/Product/ProductData';
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
    <AppContainer>
      <div className='Homepage-body'>
        <Header />
        <AboutUs />
        <OurProduct />
        <Footer />

        <BackTop duration={150}><div style={backtopstyle}>Up</div></BackTop>
      </div>
    </AppContainer>
  )
}

export default Home;
