import React from 'react'
import Nav from 'Nav'

var Main = (props) => {
  return(
    <section>
      <Nav/>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {props.children}
        </div>
      </div>
    </section>
  );
};

module.exports = Main;
