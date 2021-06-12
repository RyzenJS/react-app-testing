import React from 'react';
import {Row, Divider} from 'antd';
import {useRouteMatch, Link} from 'react-router-dom';
import {products} from '../../../utils/products';
import Kard from './Kard';
import './OurProduct.css';

function OurProduct() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();
  console.log('path', path)
  console.log('url', url)

  return (
    <>
    <section id='product'>
      <Divider><h1 className='product-h1'>Our Products</h1></Divider>

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

// <Link to={`${url}${product.path}`}></Link>
