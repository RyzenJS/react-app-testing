import React from 'react';

// Images
import Bellpepper from './Images/bellpepper.jpg';
import Tomato from './Images/tomatoes.jpg';
import Pumpkin from './Images/orangepumpkins.jpg';
import Carrot from './Images/carrots.jpg';

// Pages
import BellpepperPage from './Items/BellpepperDetail';
import TomatoPage from './Items/TomatoDetail';
import PumpkinPage from './Items/PumpkinDetail';
import CarrotPage from './Items/CarrotDetail';

export const ProductData = [
  {
    title: 'Green Bell Pepper',
    path: '/greenbellpepperdetail',
    description: 'www.pexels.com',
    image: <img src={Bellpepper} alt="Bellpepper" />,
    component: BellpepperPage,
    cName: 'data-text'
  },
  {
    title: 'Carrots',
    path: '/carrotdetail',
    description: 'www.pexels.com',
    image: <img src={Carrot} alt="Carrot" />,
    component: TomatoPage,
    cName: 'data-text'
  },
  {
    title: 'Orange Pumpkins',
    path: '/pumpkindetail',
    description: 'www.pexels.com',
    image: <img src={Pumpkin} alt="Pumpkin" />,
    component: PumpkinPage,
    cName: 'data-text'
  },
  {
    title: 'Tomatoes',
    path: '/tomatodetail',
    description: 'www.pexels.com',
    image: <img src={Tomato} alt="Tomato" />,
    component: CarrotPage,
    cName: 'data-text'
  }
]
