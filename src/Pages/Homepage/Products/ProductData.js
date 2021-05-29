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
    cName: 'data-text'
  },
  {
    title: 'Carrots',
    path: '/carrotdetail',
    description: 'www.pexels.com',
    image: <img src={Carrot} alt="Carrot" />,
    cName: 'data-text'
  },
  {
    title: 'Orange Pumpkins',
    path: '/pumpkindetail',
    description: 'www.pexels.com',
    image: <img src={Pumpkin} alt="Pumpkin" />,
    cName: 'data-text'
  },
  {
    title: 'Tomatoes',
    path: '/tomatodetail',
    description: 'www.pexels.com',
    image: <img src={Tomato} alt="Tomato" />,
    cName: 'data-text'
  }
]
