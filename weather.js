const request = require('postman-request');
const geoAndWeather = require("./geoCode");




geoAndWeather.geoCode("Herat,Afghanistan",(err, data) =>{
  console.log("Error:",err);
  console.log("data:",data);
})