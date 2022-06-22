const request = require('postman-request');
const url ="http://api.weatherstack.com/current?access_key=65ed4a551e6818814101a7f3ada27311&query=Afghanistan&units=s";
request({url, json:true}, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(`The temperature is ${body.current.temperature} but it fells like ${body.current.feelslike}` ); // Print the HTML for the Google homepage.
});