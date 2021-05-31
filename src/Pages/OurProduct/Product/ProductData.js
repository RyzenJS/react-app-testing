import React from 'react';

// Images
import Bellpepper from './Images/bellpepper.jpg';
import Tomato from './Images/tomatoes.jpg';
import Pumpkin from './Images/orangepumpkins.jpg';
import Carrot from './Images/carrots.jpg';

// Pages
import BellpepperDetail from './Items/BellpepperDetail';
import TomatoDetail from './Items/TomatoDetail';
import PumpkinDetail from './Items/PumpkinDetail';
import CarrotDetail from './Items/CarrotDetail';

export const ProductData = [
  {
    title: 'Green Bell Pepper',
    path: '/greenbellpepperdetail',
    description: 'www.pexels.com',
    image: <img src={Bellpepper} alt="Bellpepper" />,
    component: BellpepperDetail,
    cName: 'data-text'
  },
  {
    title: 'Carrots',
    path: '/carrotdetail',
    description: 'www.pexels.com',
    image: <img src={Carrot} alt="Carrot" />,
    component: CarrotDetail,
    cName: 'data-text'
  },
  {
    title: 'Orange Pumpkins',
    path: '/pumpkindetail',
    description: 'www.pexels.com',
    image: <img src={Pumpkin} alt="Pumpkin" />,
    component: PumpkinDetail,
    cName: 'data-text'
  },
  {
    title: 'Tomatoes',
    path: '/tomatodetail',
    description: 'www.pexels.com',
    image: <img src={Tomato} alt="Tomato" />,
    component: TomatoDetail,
    cName: 'data-text'
  }
]
