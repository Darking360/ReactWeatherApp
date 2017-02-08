import React from 'react'
import Nav from 'Nav'

var Main = (props) => {
  return(
    <section>
      <Nav/>
      <h2>Main component</h2>
      {props.children}
    </section>
  );
};

module.exports = Main;
