import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import {
  BackTop,
  Button,
  Row,
  Col,
  Divider,
  Pagination,
  Image,
  Card,
  Typography
} from 'antd';
import Leafy from './Banner/Leafy.mp4';
import AppContainer from '../../utils/AppContainer';
import Navbar from '../Navbar';
import Header from '../components/Header/Header';
import AboutUs from '../components/AboutUs/AboutUs';
import {ProductData} from '../OurProduct/Product/ProductData';
import './Home.css';

const { Title, Paragraph } = Typography;
const { Meta } = Card;
const style = { background: '#446B40', padding: '8px 0' };
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

        <BackTop duration={150}><div style={backtopstyle}>Up</div></BackTop>
      </div>
    </AppContainer>
  )
}

export default Home;
