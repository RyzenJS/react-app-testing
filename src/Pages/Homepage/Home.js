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

        <section id='about-us'>
          <div className='content-container'>
            <Title level={3}>Welcome</Title>
            <Title level={2}>About Us</Title>
            <blockquote>
              <Paragraph copyable={{tooltips: false}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Paragraph>
            </blockquote>
            <Button>Get Direction</Button>
          </div>
        </section>

        <footer className='footer-container'>
          <div className='footer-content'>
            <h2>Contact Us.</h2>
            <a target='_blank' rel='noreferrer noopener nofollow'><h1>gulay@vegetables.com</h1></a>
          </div>
        </footer>

        <BackTop duration={150}>
          <div style={backtopstyle}>Up</div>
        </BackTop>
      </div>
    </AppContainer>
  )
}

export default Home;
