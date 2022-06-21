const yargs = require("yargs");
const pathRecord= require("./files");

const os = require("os");
console.log(os.networkInterfaces());



//list all notes
yargs.command({
  command: "list",
  describe: "Some notes to show",
  handler:(argv) => {
    pathRecord(argv.some)
  },
});
console.log(yargs.argv);