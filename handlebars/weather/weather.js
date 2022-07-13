const forCast = require("./forCast");
const geoCode = require("./geoCode");
const express = require("express");
const app = express();
const arv=process.argv[2];

if(!arv){
  console.log("please insert your location");
}else{
geoCode(process.argv[2],(err, {latitude,longitude,   place_name }={}) =>{
  if(err){
    console.log(err);
  }
  forCast( longitude,latitude,(err,result) => {
      app.get("",(req,res) =>{
      res.send(`<h3>${result}</h3>`);
    })
  })
})
};
app.listen(4000,console.log("we are connected to port 4000"))