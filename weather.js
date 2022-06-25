const forCast = require("./forCast");
const geoCode = require("./geoCode");

const arv=process.argv[2];

if(!arv){
  console.log("please insert your location");
}else{
geoCode(process.argv[2],(err, {latitude,longitude,   place_name }={}) =>{
  if(err){
    console.log(err);
  }
  forCast( longitude,latitude,(error,result) => {
    if(error){
      console.log(error);
    }
    console.log({latitude,longitude,place_name});
    console.log(result);
  })
})
}