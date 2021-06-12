import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import logo from '../../../images/favicon.ico';

function Nav() {
  const cart = useSelector((state) => state.cart);

  return (
    <>
    <nav className="navbar">
      <div className="header-nav">
        <Link to="/"><img src={logo} /></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div className="collapse-navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav" style={{gap: "25px"}}>
            <Link to="/" class="nav-link-active" aria-current="page" href="#">Home</Link>
            <a className="nav-link" href="#">
              Cart {cart.length > 0 && <span className="cart">{cart.length}</span>}
            </a>
            <Link to="/order" className="nav-link-order-btn" href="#">Order Now</Link>
         </div>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Nav;
