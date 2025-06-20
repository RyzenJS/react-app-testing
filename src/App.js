import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NoMatch from './Pages/NoMatch';
import Nav from './Pages/components/Nav/Nav';
import Home from './Pages/Homepage/Home';
import Order from './Pages/Order';
import OurProduct from './Pages/OurProduct/OurProduct';

// Product pages
import BellpepperDetail from './Pages/OurProduct/Product/Items/BellpepperDetail';
import TomatoDetail from './Pages/OurProduct/Product/Items/TomatoDetail';
import PumpkinDetail from './Pages/OurProduct/Product/Items/PumpkinDetail';
import CarrotDetail from './Pages/OurProduct/Product/Items/CarrotDetail';
import 'antd/dist/antd.css';
import './App.css';


function App() {
  return (
    <>
      <Router>
        <Nav />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/order' component={Order} />

          {/* Before */}
          <Route exact path='/our-products' component={OurProduct} />
          <Route path='/our-products/greenbellpepper-detail' component={BellpepperDetail} />
          <Route path='/our-products/carrot-detail' component={CarrotDetail} />
          <Route path='/our-products/pumpkin-detail' component={PumpkinDetail} />
          <Route path='/our-products/tomato-detail' component={TomatoDetail} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
