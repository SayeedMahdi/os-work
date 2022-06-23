 const request = require('postman-request');

const geoCode = (address, callback) =>{
    const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2F5ZWVkLW1haGRpIiwiYSI6ImNsNHFqa28yOTBreDEzanMybWlhNjlybXEifQ.GLcLV6P_GNfoIrJD9jlyuQ';
    request({url:url, json:true},(err,res) =>{
        if(err){
            callback("Enable To connect please check Your connection",undefined);
        }else if(res.body.features.length === 0){
            callback("location not found,Please Try another location!",undefined);
        }
        callback(undefined,{
            latitude : res.body.features[0].center[1],
            longitude:res.body.features[0].center[0],
            place_name : res.body.features[0].place_name
        });
    });
};


//weather show function 
const weather = (latitude,longitude, callback) =>{
    const url =`http://api.weatherstack.com/current?access_key=65ed4a551e6818814101a7f3ada27311&query=${latitude},${longitude}`;
    request({url, json:true}, (error, response, body) => {
        if(err){
            callback("Enable To connect please check Your connection",undefined);
        }else if(res.body.features.length === 0){
            callback("location not found,Please Try another location!",undefined);
        }
        callback(undefined,{
             body,
             response
        });
     
    });
}
module.exports = {geoCode,weather};
