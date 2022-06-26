const express = require("express");
const app = express();
app.set("view engine","hbs");

app.get("/",(req,res) =>{
    res.render("home",{
        tittle:"Home page",
        author:"Sayeed Mahdi Mousavi"
    })
});

app.get("/about",(req,res) =>{
    res.render("about",{
        tittle:"About app",
        author:"Sayeed Mahdi Mousavi"
    })
})

app.listen(3000,console.log("Some pages to show you in the this port:3000"));