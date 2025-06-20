import React from 'react';
import {
  useLocation
} from 'react-router-dom';

function NoMatch() {
  let location = useLocation();

  return(
    <>
    <h1>
      No match for <code>{location.pathname}</code>
    </h1>
    </>
  );
}

export default NoMatch;
