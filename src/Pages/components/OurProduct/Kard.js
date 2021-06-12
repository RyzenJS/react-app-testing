import React from 'react';
import {
  useDispatch,
  useSelector
} from 'react-redux';
import {bindActionCreators} from 'redux';
import {isIntoCart} from '../../../helper/helper';
import {actionCreators} from '../../../state/index';
import {Card, Button, Col} from 'antd';

function Kard({data}) {
  const {id, name, price, description} = data;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const {addToCart, removeFromCart} = bindActionCreators(actionCreators, dispatch);
  const style = { background: '#446B40', padding: '8px 0' };
  const { Meta } = Card;

  return (
    <>
      <Col>
        <Card
          hoverable
          style={{ width: 240}}
        >
          <Meta title={name} description={description}><h2>${price}</h2></Meta>

          {isIntoCart(cart, id) ? (
            <Button onClick={() => removeFromCart(id)}>Remove From Cart</Button>
          ) : (
            <Button onClick={() => addToCart(data)}>Add To Cart</Button>
          )}
        </Card>
      </Col>
    </>
  )
}

export default Kard;
