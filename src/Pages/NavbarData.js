import React from 'react';
import {
  HomeOutlined,
  ShopOutlined,
  ExclamationCircleOutlined,
  PhoneOutlined
} from '@ant-design/icons';


export const NavbarData = [
  {
    title: 'Home',
    path: '/',
    icon: <HomeOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'About Us',
    path: '/about-us',
    icon: <ExclamationCircleOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Our Products',
    path: '/our-products',
    icon: <ShopOutlined />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    icon: <PhoneOutlined />,
    cName: 'nav-text'
  }
]
