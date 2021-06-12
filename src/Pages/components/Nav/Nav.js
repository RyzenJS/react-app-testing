import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';

function Nav() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
    <nav>
      <div className="header-nav">
        <Link to="/" href="#"><h3 className='nav-h3'>Home</h3></Link>
        <a class="nav-link" href="#">
          <h3 className='nav-h3'>Cart
            {cart.length > 0 && <span className="cart">{cart.length}</span>}
          </h3>
        </a>
        <Link to="/order" className="order-btn" href="#">Order Now</Link>
      </div>
    </nav>
    </>
  )
}

export default Nav;

// <button
// class="navbar-toggler"
// type="button"
// data-bs-toggle="collapse"
// data-bs-target="#navbarNavAltMarkup"
// aria-controls="navbarNavAltMarkup"
// aria-expanded="false"
// aria-label="Toggle navigation"
// >
// <span class="navbar-toggler-icon"></span>
// </button>
