import React from 'react';
import Bellpepper from './Images/bellpepper.jpg';
import Tomato from './Images/tomatoes.jpg';
import Pumpkin from './Images/orangepumpkins.jpg';
import Carrot from './Images/carrots.jpg';

export const ProductData = [
  {
    title: 'Green Bell Pepper',
    path: '/greenbellpepperdetail',
    description: 'www.pexels.com',
    image: <img src={Bellpepper} alt="Bellpepper" />,
    order: 1,
    cName: 'data-text'
  },
  {
    title: 'Carrots',
    path: '/carrotdetail',
    description: 'www.pexels.com',
    image: <img src={Carrot} alt="Carrot" />,
    order: 2,
    cName: 'data-text'
  },
  {
    title: 'Orange Pumpkins',
    path: '/pumpkindetail',
    description: 'www.pexels.com',
    image: <img src={Pumpkin} alt="Pumpkin" />,
    order: 3,
    cName: 'data-text'
  },
  {
    title: 'Tomatoes',
    path: '/tomatodetail',
    description: 'www.pexels.com',
    image: <img src={Tomato} alt="Tomato" />,
    order: 4,
    cName: 'data-text'
  }
]
