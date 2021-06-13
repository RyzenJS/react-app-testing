import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {totalCost} from '../../../helper/helper';
import {actionCreators} from '../../../state/index';
import ListCard from './ListCard';
import './Order.css';
import emptyImage from '../../../images/empty.svg';

function OrderList() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const {checkout} = bindActionCreators(actionCreators, dispatch);

  return (
    <>
    <section className="orderlist-wrapper">
      <div className="orderlist-card">
        <h4 className="order-h4">Your Order List</h4>

        {
          cart.length ? (
            <div className="orderlist-lists">
              {
                cart.map((item) => (
                  <ListCard data={item} />
                ))
              }
              <div className="orderlist-total">
                <h4 className="order-h4">Total: ${totalCost(cart)}</h4>

                <button className="order-checkout" onClick={() => checkout()}>Checkout</button>
              </div>
            </div>
          ) : (
            <img src={emptyImage} className='emptyImage' />
          )
        }
      </div>
    </section>
    </>
  )
}

export default OrderList;
