import React from 'react'

var WeatherForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    if(this.refs.city.value.length > 0){
      var city = this.refs.city.value;
      this.refs.city.value = "";
      this.props.callNewCity(city);
    }
  },
  render: function(){
    return(
      <div>
        <h2>Get Weather</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input type="text" placeholder="Enter city name" ref="city"></input>
          </div>
          <div>
            <button type="text">Get Weather</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = WeatherForm;
