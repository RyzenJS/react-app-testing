import React from 'react';

// Images
import Bellpepper from './Images/bellpepper.jpg';
import Tomato from './Images/tomatoes.jpg';
import Pumpkin from './Images/orangepumpkins.jpg';
import Carrot from './Images/carrots.jpg';

// Pages
import BellpepperDetail from './Items/BellpepperDetail';
import CarrotDetail from './Items/CarrotDetail';
import PumpkinDetail from './Items/PumpkinDetail';
import TomatoDetail from './Items/TomatoDetail';

export const ProductData = [
  {
    title: 'Green Bell Pepper',
    path: '/greenbellpepper-detail',
    description: 'www.pexels.com',
    image: <img src={Bellpepper} alt="Bellpepper" />,
    page: BellpepperDetail,
    cName: 'data-text'
  },
  {
    title: 'Carrots',
    path: '/carrot-detail',
    description: 'www.pexels.com',
    image: <img src={Carrot} alt="Carrot" />,
    page: CarrotDetail,
    cName: 'data-text'
  },
  {
    title: 'Orange Pumpkins',
    path: '/pumpkin-detail',
    description: 'www.pexels.com',
    image: <img src={Pumpkin} alt="Pumpkin" />,
    page: PumpkinDetail,
    cName: 'data-text'
  },
  {
    title: 'Tomatoes',
    path: '/tomato-detail',
    description: 'www.pexels.com',
    image: <img src={Tomato} alt="Tomato" />,
    page: TomatoDetail,
    cName: 'data-text'
  }
]
