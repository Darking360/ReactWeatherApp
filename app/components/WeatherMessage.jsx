import React from 'react'

var WeatherMessage = (props) => {
  return(
    <div>
      <h3>{props.message}</h3>
    </div>
  );
};

module.exports = WeatherMessage;
