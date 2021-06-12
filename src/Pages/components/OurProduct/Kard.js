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
  const {Meta} = Card;

  return (
    <>
      <Col>
        <Card
          hoverable
          style={{ width: 240}}
          cover={<img src={require("../../../images/product/" + image + ".jpg").default} className='Kard-img' />}
        >
          <Meta title={name} description={description}><h2>${price}</h2></Meta>

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
