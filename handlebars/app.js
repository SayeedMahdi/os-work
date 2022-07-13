const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const geoCode = require("./weather/geoCode");
const forCast = require("./weather/forCast");


const public = path.join(__dirname, "./public");
const viewPath = path.join(__dirname, "./template/views");
const partialPath = path.join(__dirname, "./template/Partial");
//set view engine
app.set("view engine", "hbs");
app.set("views", viewPath);
console.log(partialPath);
hbs.registerPartials(partialPath); 
app.use(express.static(public));

app.get("/", (req, res) => {
  res.render("home", {
    tittle: "Home page",
    author: "Sayeed Mahdi Mousavi",
  });
});

app.get("/weather",(req,res) =>{
  const place = req.query.place;
  if(!place){
    return res.send("not set place@!");
  }
  geoCode(place,(err, {latitude,longitude,   place_name }={}) =>{
    if(err){
      console.log(err);
    }
    forCast( longitude,latitude,(err,result) => {
        res.send(`<h3>${result}</h3>`);
    })
  })
  
});

app.get("/about", (req, res) => {
  res.render("about", {
    tittle: "About app",
    author: "Sayeed Mahdi Mousavi",
  });
});

app.get("*", (req,res) =>{
  res.render("404",{
    message:"404 There is no such face exist!"
  })
})
app.listen(4000, console.log("Some pages to show you in the this port:4000"));
