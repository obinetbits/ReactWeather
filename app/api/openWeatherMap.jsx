var axios = require('axios');
var API_KEY = require('env.js');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var appId = API_KEY.open_weather_map_key();
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&appid=${appId}&q=${encodedLocation}`;
        //console.log(API_KEY.open_weather_map_key());

       return axios.get(requestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, function (res){
            throw new Error(res.data.message);
        });
    }
}