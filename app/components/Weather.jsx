import React from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'

var Weather = React.createClass({
  getInitialState: function(){
    return {
      message: "",
      isLoading: false
    }
  },
  fetchNewCity: function(city){
    var that = this;
    this.setState({
      message: "",
      isLoading: true
    });
    openWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        message: "It's " + temp + " degrees on " + city,
        isLoading: false
      });
    }, function(errorMessage){
      alert(errorMessage);
    });
  },
  render: function(){
    var isLoading = this.state.isLoading;
    var that = this;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>
      }else if(that.state.message.length > 0){
        return <WeatherMessage message={that.state.message}/>;
      }
    };
    return(
      <div>
        <h3>Weather component</h3>
        <WeatherForm callNewCity={this.fetchNewCity}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
