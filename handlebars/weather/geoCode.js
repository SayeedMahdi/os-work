 const request = require('postman-request');




const geoCode = (address, callback) =>{
    const url ="https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+'.json?access_token=pk.eyJ1Ijoic2F5ZWVkLW1haGRpIiwiYSI6ImNsNHFqa28yOTBreDEzanMybWlhNjlybXEifQ.GLcLV6P_GNfoIrJD9jlyuQ';
    request({url, json:true},(err,res) =>{
        if(err){
            callback("Enable To connect please check Your connection",undefined);
        }else if(res.body.features.length === 0){
            callback("location not found,Please Try another location!",undefined);
        }
        callback(undefined,{
            latitude : res.body.features[0].center[0],
            longitude:res.body.features[0].center[1],
            place_name : res.body.features[0].place_name
        });
    });
};



module.exports = geoCode;
