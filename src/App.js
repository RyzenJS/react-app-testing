import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation
} from 'react-router-dom';
import 'antd/dist/antd.css';
import NoMatch from './Pages/NoMatch';
import Nav from './Pages/components/Nav/Nav';
import Home from './Pages/Homepage/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import OurProduct from './Pages/OurProduct/OurProduct';
import ContactUs from './Pages/ContactUs/ContactUs';
import BellpepperDetail from './Pages/OurProduct/Product/Items/BellpepperDetail';
import TomatoDetail from './Pages/OurProduct/Product/Items/TomatoDetail';
import PumpkinDetail from './Pages/OurProduct/Product/Items/PumpkinDetail';
import CarrotDetail from './Pages/OurProduct/Product/Items/CarrotDetail';
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
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact-us' component={ContactUs} />
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
