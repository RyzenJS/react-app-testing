import React from 'react';
import Kard from './Kard';
import {products} from '../../../utils/products';
import {
  Row,
  Col
} from 'antd';

function OurProduct() {
  return (
    <>
    <section className='product-container'>
      <h1>Our Products</h1>

      <Row>
        {
          products.map((product) => product.type === "vegetable" &&
          <Kard data={product} key={product.id} />)
        }
      </Row>
    </section>
    </>
  )
}

export default OurProduct;
