var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var root = __dirname;

app.use( express.static( path.join( root, 'client' )));
app.use( express.static( path.join( root, 'bower_components' )));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

process.env["root"] = __dirname;

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(5000, function(){
    console.log("Listening on port 5000.");
});
