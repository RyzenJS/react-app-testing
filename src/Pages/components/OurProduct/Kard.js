import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {bindActionCreators} from 'redux';
import {isIntoCart} from '../../../helper/helper';
import {actionCreators} from '../../../state/index';
import {Card, Button, Col} from 'antd';
import './OurProduct.css';

function Kard({data}) {
  const {id, name, price, description, image} = data;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const {addToCart, removeFromCart} = bindActionCreators(actionCreators, dispatch);
  const style = { background: '#446B40', padding: '8px 0' };

  return (
    <>
      <Col>
        <Card
          hoverable
          style={{ width: 240}}
          cover={<img src={require("../../../images/product/" + image + ".jpg").default} className='Kard-img' />}
        >
          <div className='title-price'>
            <h2 className='kard-h2'>{name}</h2>
            <h3 className='kard-h3'>${price}</h3>
          </div>
          <p className='kard-p'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Error, eaque sequi eius?
          </p>
          {isIntoCart(cart, id) ? (
            <Button className='kard-btn' onClick={() => removeFromCart(id)} style={{background: "#ff335c" }}>Remove From Cart</Button>
          ) : (
            <Button className='kard-btn' onClick={() => addToCart(data)}>Add To Cart</Button>
          )}
        </Card>
      </Col>
    </>
  )
}

export default Kard;
