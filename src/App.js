import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Navbar from './Pages/Navbar';
import Home from './Pages/Homepage/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/' />
        </Switch>
      </Router>
    </>
  );
}

export default App;
