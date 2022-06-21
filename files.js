const { promises: { readdir },readFileSync } = require('fs')
const path = require("path");
const getDirectories = async source =>
  (await readdir(source, { withFileTypes: true  }))
    .filter(dirent => dirent.isFile() || dirent.isDirectory())
    .map(dirent => {
        console.log(`-->`,dirent.name);
        console.log("|");
        return dirent.name;
    });
    const getPath =(somePath) =>{
        console.log("some",somePath);
        getDirectories(path.resolve(__dirname,somePath)).then((data) =>{
          console.log(`${somePath}/`,data[0]);
          const read = readFileSync("./app.js");
          const red = JSON.stringify(read);
          
        })
        .catch((err) =>{
        console.log(err);
        });
    }
    module.exports = getPath;