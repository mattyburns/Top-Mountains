import React from 'react';
import { Link } from 'react-router';

const Access = props => {

  return(
    <div id="access" className="large-12 columns ">
        <h2>{props.text}</h2>
        <h3>You must log in to access this feature.</h3>
    </div>
  )
}

export default Access;
