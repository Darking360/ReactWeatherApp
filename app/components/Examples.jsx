import React from 'react'
import {Link} from 'react-router'


var Examples = (props) => {
  return(
    <div>
      <h1 className="text-center">Examples component</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li>
          <Link to="/?location=Philadelphia">Philadelphia, PA</Link>
        </li>
        <li>
          <Link to="/?location=Japan">Japan, JP</Link>
        </li>
      </ol>
    </div>
  );
};

module.exports = Examples;
