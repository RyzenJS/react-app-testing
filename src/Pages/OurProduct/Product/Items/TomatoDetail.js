import React from 'react';
import {useParams} from 'react-router-dom';

function TomatoDetail() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();
  
  return (
    <>
      <h1>Tomato details here</h1>
    </>
  )
}

export default TomatoDetail;
