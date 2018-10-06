const db = require("./model").data.db;

module.exports =
function init() {
    
  db.on("error", console.error.bind(console, "connection error:"));
  db.once("open", function() {
    console.log("success on connect");
  });
}
// init();