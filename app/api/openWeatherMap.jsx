import Axios from 'axios'

const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=8e12de913f0fd73b65fe066c9c4aad73&units=imperial";

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return Axios.get(requestUrl).then(function(response){
      if(response.data.cod && response.data.message){
        throw new Error(response.error.message)
      }else{
        return response.data.main.temp;
      }
    }, function(response){
      throw new Error(response.data.message)
    });
  }
}
