const request = require("postman-request");
const forecast = (latitude,longitude,callback) => {
    const url =
      "http://api.weatherstack.com/current?access_key=637e51e2e60bf200605edaac83f2d56f&query=" +
      latitude + ',' + longitude + '&units=f';
    request({ url: url, json: true }, (error, response) => {
      if (error) {
        callback("Unable to connect to weather services!", undefined);
      } else if (response.body.length === 0) {
        callback("Unable to find location. Try another search", undefined);
      } else {
        callback(undefined, response.body.current.weather_descriptions);
      }
    });
  };
  module.exports = forecast