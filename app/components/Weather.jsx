import React from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import openWeatherMap from 'openWeatherMap'
import ErrorModal from 'ErrorModal'

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
      isLoading: true,
      errorMessage: undefined
    });
    openWeatherMap.getTemp(city).then(function(temp){
      that.setState({
        message: "It's " + temp + " degrees on " + city,
        isLoading: false
      });
    }, function(errorMessage){
      that.setState({
        errorMessage: errorMessage
      });
    });
  },
  componentDidMount: function(){
    var city = this.props.location.query.location;
    if(city && city.length > 0){
      this.fetchNewCity(city);
      window.location.hash = '#/';
    }
  },
  componentWillReceiveProps: function(newProps){
    var city = newProps.location.query.location;
    if(city && city.length > 0){
      this.fetchNewCity(city);
      window.location.hash = '#/';
    }
  },
  render: function(){
    var isLoading = this.state.isLoading;
    var errorMessage = this.state.errorMessage;
    var that = this;
    function renderMessage(){
      if(isLoading){
        return <h3>Fetching weather...</h3>
      }else if(that.state.message.length > 0){
        return <WeatherMessage message={that.state.message}/>;
      }
    };

    function renderError(){
      if(typeof errorMessage == "string"){
        return (<ErrorModal/>);
      }
    };

    return(
      <div>
        <WeatherForm callNewCity={this.fetchNewCity}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
});

module.exports = Weather;
