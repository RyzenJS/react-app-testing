import React from 'react';
import {Button} from 'antd';
import './AboutUs.css';

function AboutUs() {
  return (
    <>
    <section id='about-us'>
      <div className='about-wrapper'>
        <h3 className='about-h3'>Welcome</h3>
        <h2 className='about-h2'>About Vegetables</h2>
        <p className='about-p'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <Button className='about-btn' href='#product'>Get Direction</Button>
      </div>
    </section>
    </>
  )
}

export default AboutUs;
