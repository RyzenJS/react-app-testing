import React from 'react';
import Navbar from '../Pages/Navbar';

function AppContainer(props) {
  return (
    <>
      <Navbar />
      <div>{props.children}</div>
    </>
  )
}

export default AppContainer;
