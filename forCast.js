
const request = require('postman-request');
const weather = (latitude,longitude, callback) =>{
    const url =`http://api.weatherstack.com/current?access_key=65ed4a551e6818814101a7f3ada27311&query=${latitude},${longitude}`;
    request({url, json:true}, (error, {body}) => {
        if(body.error){
            callback("Enable To connect please check Your connection",undefined);
        }else if(body.length === 0){
            callback("location not found,Please Try another location!",undefined);
        }
        callback(undefined,`The current weather temperature is ${body.current.temperature} but it feels like ${body.current.feelslike}`);
     
    });
}
module.exports = weather;