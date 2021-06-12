import React from 'react';
import Kard from './Kard';
import {products} from '../../../utils/products';
import {Row, Divider} from 'antd';
import './OurProduct.css';

function OurProduct() {
  return (
    <>
    <section id='product'>
      <Divider><h1 className='product-h1'>Our Products</h1></Divider>

    </section>
    </>
  )
}

export default OurProduct;

// <Row>
// {
//   products.map((product) => product.type === "vegetable" &&
//   <Kard data={product} key={product.id} />)
// }
// </Row>
