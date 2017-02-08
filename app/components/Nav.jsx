import React from 'react'
import {Link, IndexLink} from 'react-router'
import { browserHistory } from 'react-router';


var Nav = React.createClass({
  searchWeatherOnNav: function(e){
    e.preventDefault();
    if(this.refs.city.value.length > 0){
      var encodedLocation = encodeURIComponent(this.refs.city.value);
      window.location.hash = '#/?location=' + encodedLocation;
      this.refs.city.value = "";
    }
  },
  render: function(){
    return(
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Weather App</li>
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
            <li><IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink></li>
            <li><IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <form onSubmit={this.searchWeatherOnNav}>
            <ul className="menu">
              <li><input type="search" placeholder="Search" ref="city"/></li>
              <li><button type="button" className="button">Search</button></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
