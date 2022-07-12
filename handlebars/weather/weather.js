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
  forCast( longitude,latitude,(error,result,datas) => {
    if(error){
      console.log(error);
    }
    console.log({latitude,longitude,place_name});
    app.get("",(req,res) =>{
      res.send(`<h3>${result}</h3>`);
    })
  })
})
};
app.listen(3000,console.log("we are connected to port 3000"))